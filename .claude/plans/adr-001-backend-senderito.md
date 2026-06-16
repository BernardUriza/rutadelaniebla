# ADR-001 — Backend para el Senderito: fi-runner compartido vs headless CMS

Status: Proposed (decisión de Bernard)
Fecha: 2026-06-16
Decisores: Bernard
Relacionado: [[asistente-virtual-senderito]] · [[cms-blogs-miguel]] (backlog)

## Contexto

El sitio del Senderito hoy es **export estático** (`next.config.ts → output: "export"`,
desplegado en Azure Static Web Apps, sin servidor ni base de datos). Hay dos
ítems de backlog que necesitan capacidad de servidor:

1. **Asistente virtual** — guía RAG conversacional del Senderito (LLM + embeddings,
   servido con la cuota Claude Max de Bernard, patrón fi-runner / free-intelligence).
2. **CMS de blogs para Don Miguel** — editor de auto-publicación (patrón VHouse
   `/mi-pagina`): contenido estructurado + auth + persistencia.

Ambos rompen el modelo 100% estático. Hay que decidir **una** estrategia de
backend antes de construir cualquiera de los dos, para no montar infra dos veces.

## La asimetría que manda la decisión

**El asistente RAG exige un backend real pase lo que pase** — lanza inferencia
LLM, embeddings y (en el patrón fi-runner) subprocesos; ninguna FaaS ni headless
CMS lo sirve. El CMS de blogs, en cambio, SÍ se puede resolver sin backend propio
(git-based). Por eso la pregunta real no es "blog con qué" sino:

> ¿El asistente está en el roadmap de verdad? Si sí, el backend ya es obligatorio,
> y el blog debería montarse encima de él en vez de traer un segundo sistema.

## Drivers de decisión

| # | Driver | Peso |
|---|--------|------|
| D1 | El asistente RAG necesita backend real (no negociable si se hace) | Alto |
| D2 | Miguel es no-técnico: necesita UI de edición con auth | Alto |
| D3 | Costo (ONG, tráfico casi nulo) | Medio |
| D4 | Reuso de la cuota Claude Max (sin costo de API por mensaje) | Alto |
| D5 | Ops/mantenimiento (es un sitio chico, no un producto) | Medio |
| D6 | Conservar el sitio público estático y rápido | Medio |
| D7 | Stack canónico de Bernard (python-bot / fi-runner) | Medio |

## Opción A — Backend fi-runner compartido (Azure Container Apps)

Un solo backend (lineage `python-bot`, Azure Container Apps) sirve **las dos
cosas**: API del asistente (RAG + LLM vía Claude Max) y API del CMS (posts +
auth de Miguel). El sitio público sigue estático en SWA; el chat y el editor son
mejoras progresivas que llaman al backend.

**Pros**
- Resuelve D1 de raíz: es el único camino que sirve el asistente.
- Una sola pieza de infra para ambas visiones (D7) — el blog va "casi gratis"
  una vez que el backend existe.
- Reusa la cuota Claude Max (D4): sin costo por mensaje del asistente.
- **Scale-to-zero** (min-replicas=0): costo ~0 cuando nadie usa el chat/editor;
  despierta on-demand (D3).
- Auth y modelo de datos a la medida (D2), no atado a un vendor.

**Contras**
- Cold start en scale-to-zero: el primer mensaje del chat / primer guardado tras
  inactividad tarda unos segundos.
- Hay que **construir** el CMS (editor + persistencia), no viene de fábrica.
- Imagen conda pesada + pipeline de deploy + secretos a gestionar (D5) — overkill
  si SOLO se quisiera el blog y nunca el asistente.
- Límites de la cuota Claude Max si el asistente se hiciera muy popular (tráfico
  ONG: improbable).

## Opción B — Headless CMS (git-based, p. ej. Decap)

Un CMS headless da UI de edición sin backend propio. La variante git-based
(Decap/Netlify CMS) hace que "publicar" = commitear markdown al repo, que dispara
el rebuild estático en SWA. La variante SaaS (Sanity/Contentful) guarda en su
nube y el sitio hace fetch.

**Pros**
- Resuelve el blog (D2) con un editor pulido, sin que construyamos el editor.
- git-based conserva el sitio 100% estático y gratis (D3, D6).
- Cero o casi cero ops de servidor propio.

**Contras**
- **No toca D1**: no sirve el asistente. Si el asistente se hace igual, terminas
  con **dos sistemas** (headless para el blog + fi-runner para el asistente) —
  más superficie, no menos. Mata D7.
- git-based: publicar = commit + rebuild (~1–2 min) y requiere montar auth (OAuth
  provider / Git Gateway) — fricción de setup para un usuario no-técnico.
- SaaS: vendor lock-in y, en planes de pago, costo recurrente; datos fuera.
- La voz editorial de Miguel queda atada a un tercero, no al stack de Bernard.

## Comparativa

| Criterio | A — fi-runner compartido | B — headless CMS |
|----------|--------------------------|------------------|
| Sirve el asistente RAG (D1) | ✅ Sí | ❌ No (necesitarías A igual) |
| Editor para Miguel (D2) | ✅ a medida (hay que construirlo) | ✅ de fábrica |
| Costo idle (D3) | ~0 con scale-to-zero | 0 (git-based) / $ (SaaS) |
| Cuota Claude Max (D4) | ✅ reusada | ➖ irrelevante (no sirve LLM) |
| Ops (D5) | Container + pipeline | Mínima (o vendor) |
| Sitio estático (D6) | ✅ público estático; backend aparte | ✅ git-based |
| Stack canónico (D7) | ✅ python-bot/fi-runner | ❌ fuera del stack |
| # de sistemas si AMBAS visiones | **1** | **2** |

## Stress test (peor caso de cada una)

- **A, peor caso**: solo se termina haciendo el blog y el asistente se cae del
  roadmap → montamos un container para algo que un git-CMS gratis habría resuelto.
  *Mitigación*: scale-to-zero deja el costo en ~0; y el editor a medida sigue
  siendo reusable. Pérdida real = tiempo de build del CMS.
- **B, peor caso**: se hace el asistente (Bernard ya lo registró como Proposed) →
  quedan dos sistemas para mantener, el blog en un vendor/flujo aparte del
  asistente, y la cuota Claude Max no se aprovecha para nada del CMS. Es el
  escenario que esta decisión existe para evitar.

## Decisión recomendada

**Opción A — un solo backend fi-runner compartido, con scale-to-zero**, condicionada
a que el asistente siga en el roadmap (lo está: Proposed). Razonamiento:

- El asistente obliga al backend (D1); negarlo no lo evita, solo lo duplica.
- Scale-to-zero neutraliza el único contra fuerte de A (costo idle) para un sitio
  ONG de bajo tráfico.
- El sitio público se queda estático y veloz; chat y editor son mejoras
  progresivas que llaman al backend.

**Cuándo elegir B en su lugar**: si Bernard decide **descartar definitivamente el
asistente** y quedarse solo con el blog, entonces un **Decap git-based** es lo
correcto — gratis, estático, sin servidor. No antes.

## Consecuencias si se aprueba A

- Orden de construcción: backend fi-runner primero (uno) → asistente encima →
  editor del CMS encima. No al revés.
- Deploy: API en Azure Container Apps (no SWA/FaaS — fi-runner lanza subprocesos),
  web sigue en SWA. OIDC, `/health` keyless, secretos vía `az containerapp secret`
  (ver regla `fi-runner-azure-deploy`).
- Secretos (token Claude Max / OAuth) fuera del repo (`secrets-management`).
- No es trabajo de kickoff: primero el diferenciador funcionando, luego una URL
  que toque un juez/usuario; la infra se estabiliza al final.

## Estado
Recomendación lista. **Falta el sí/no de Bernard** sobre romper lo estático y
montar el backend fi-runner compartido. Hasta entonces, ambos ítems siguen
Proposed en el backlog.
