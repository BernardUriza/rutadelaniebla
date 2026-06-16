# Visión — Asistente virtual de recorridos del Senderito

Visión de producto registrada por Bernard el 2026-06-16. Aún NO construida —
este documento fija el objetivo y la ruta canónica para cuando se implemente,
para que no se reinvente ni se desvíe del tono.

## Qué es

Un **asistente conversacional embebido en la página del Senderito** que guíe
**recorridos virtuales** del Senderito del Bosque de Niebla (Cerro de las
Culebras, Coatepec): explica las estaciones interpretativas, las especies, la
historia del lugar, los murales, los festivales — como un guía que camina con el
visitante.

### Tono — para toda la familia
- Habla **para todas las edades**: desde niños hasta adultos. Cercano, cálido,
  con asombro, nunca acartonado ni técnico-seco.
- A la vez **erudito y preciso** en el tema específico del Senderito: nombres de
  especies, datos de biodiversidad, historia del ANP, marco legal — sin inventar
  (las cifras viven en [[../../lib/data.ts]] y la biblioteca digital).
- Tiene **nombre propio, divertido**, un personaje (mascota/guía) que dé
  identidad — bautizarlo es parte del entregable, no un detalle.

## Cómo — reusar lo canónico, NO reinventar (Art. 6)

Bernard YA sabe construir esto. La implementación se clona de sus ejemplos, no se
inventa desde cero:

- **`~/Documents/free-intelligence`** — monorepo RAG real (AURITY) en producción:
  embeddings + recuperación + LLM. Es el ejemplo vivo del patrón RAG.
- **insult-ai** — asistente conversacional servido **con la cuota de Claude Max**
  de Bernard (token OAuth de Claude Code como backend, sin pagar API aparte). Esa
  es "la misma lógica" que él quiere reusar aquí. (El repo no está como carpeta
  local top-level; es el patrón fi-runner / `python-bot`.)
- Doctrina de stack y deploy ya escrita en el playbook:
  `new-project-stack.md` (clonar `python-bot`, tracer bullet) y
  `fi-runner-azure-deploy.md` (API en Azure Container Apps porque fi-runner
  lanza subprocesos; web Next.js en Azure SWA — este repo YA está en SWA).

Arquitectura esperada (cuando se haga): RAG sobre el corpus del Senderito →
respuesta de un LLM respaldado por la cuota Claude Max → UI conversacional
embebida en el sitio Next.js de `web/`, sin superficie HTML paralela.

## Corpus del RAG (fuente de verdad, ya existe)

El conocimiento del asistente NO se inventa: se indexa de lo que ya hay y de lo
que falta por llegar.
- `lib/data.ts` — stats verificadas, documentos, especies de la galería.
- La biblioteca digital (`/public/pdf/...`): presentación del Senderito, guía de
  aves, inventario de especies, lotería del bosque, etc. Varios PDFs siguen
  pendientes de que los comparta Don Miguel — el corpus crece con ellos.
- Las notas de prensa (`/prensa`) y la historia de los creadores.

## Restricciones duras
- **Cero alucinación sobre el Senderito.** Si el dato no está en el corpus, el
  asistente lo dice; no inventa especies, cifras ni fechas (Art. 2 + regla
  `data-integrity`).
- **Una sola superficie**: la UI vive en el sitio Next.js existente. Nada de HTML
  desechable ni un portal aparte (`new-project-stack` — prohibición).
- **Secretos fuera del repo**: el token de Claude Max / OAuth va en `~/.secrets/`
  y al secret store de Azure, nunca commiteado (regla `secrets-management`).

## Estado
Visión, no implementación. Cuando Bernard dé luz verde a construirlo, el primer
paso es revisar `free-intelligence` + el patrón fi-runner y clonar, no diseñar de
nuevo.
