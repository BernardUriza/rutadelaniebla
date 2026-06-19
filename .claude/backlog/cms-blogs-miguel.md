# Visión — CMS de blogs para Don Miguel (auto-publicación)

Status: In progress — tracer-bullet (blog estático) shipped 2026-06-19; falta la auto-publicación (backend)
Proposed: 2026-06-16 by Bernard

## Tracer-bullet shipped (19 jun 2026)
La **sección de blog estática ya está en vivo**: `/blog` + `/blog/[slug]` (Next
`output:export`, `generateStaticParams`), renderizada desde `lib/data.ts` →
`posts: BlogPost[]` con cuerpo de **bloques estructurados** (párrafo/cita/video/
foto) — el contrato que el ingestor llenará. Primer post «No me dejes plantado»
aterrizado en el transcript real del reportaje de RTV (yt-dlp) + video embebido.
Falta lo de abajo: que **Miguel/Leticia publiquen ellos** (auth + persistencia, o
que el ingestor escriba el `posts[]` por ellos con preview→aprobar).

Backlog item (no es una rule) — gobernado por `backlog-handling`. Pareja de
[[asistente-virtual-senderito]]: ambas comparten backend.

## Qué es

Un **sistema de edición de contenido** que se le entrega a **Don Miguel Andrade
Huerta** (creador del Senderito) para que **publique él mismo los blogs que
quiera** en el sitio, sin depender de Bernard para cada nota. Miguel ya redacta
bien (ej. su artículo «Sufre pérdida el Senderito de Bosque de Niebla»,
13 oct 2025) — el objetivo es darle las llaves de su propia voz editorial.

## Evolución (19 jun 2026) — blogs MULTIMEDIA que el ingestor puede redactar

La visión se afila: un blog no es solo texto de Miguel. **Cada video, cada
evento, cada foto con su explicación merece su propio blog**, con temas diversos
y multimedia (video embebido + sus **citas/transcript**, **keyframes**, fotos,
contexto). Y el [[asistente-throughput-redes|ingestor]] puede **redactar el
borrador** de esos blogs desde el material crudo:

- Un video (p.ej. los reportajes de RTV ya ingeridos hoy) → transcript +
  keyframes vía la técnica [[youtube-video-transcription]] → borrador de blog del
  evento, con las frases clave y los stills sincronizados.
- Una foto / un flyer / una nota de voz → entrada con su explicación.

Esto **dogfoodea la sección de blogs**: lo que hoy hicimos a mano (evento, prensa,
galería) es el primer lote; el siguiente nivel es que cada pieza tenga su blog.
Reconcilia con «sin alucinar» (abajo): el ingestor **redacta anclado en material
REAL** (transcript de SU video, SUS fotos) y **siempre pasa por preview→aprobar**
de Miguel/Leticia — es su pluma asistida, no autoría inventada.

## El patrón canónico — «lo mismo que VHouse» (Art. 6)

En VHouse el dueño edita su página desde `/mi-pagina`:
- `src/VHouse.UI/Models/SabrosuraContent.cs` / `NodoEticoContent.cs` — contenido
  estructurado (objeto C#).
- `VHouse.Web/Components/Pages/SabrosuraEditor.razor` — la UI del editor.
- Se serializa a JSON y se guarda en `License.MarketplaceContentJson` (**DB**),
  con fallback a `.Default()`. El dueño entra autenticado y edita.

Eso es la referencia. Para blogs el modelo es una **lista de posts** (título,
autor, fecha, cuerpo en markdown/rich-text, portada, estado borrador/publicado).

## La decisión que es de Bernard (no asumir)

El sitio del Senderito HOY es **export estático** (`next.config.ts` →
`output: "export"`, Azure SWA, sin backend ni DB). Un editor donde Miguel entra y
publica **rompe el modelo estático**: requiere persistencia + auth. No es
drop-in. Hay dos caminos; el recomendado abajo:

- **Recomendado — backend compartido (fi-runner / `python-bot` en Azure
  Container Apps):** el MISMO backend que pide el asistente virtual sirve también
  los posts (API + DB). Una sola pieza de infra para las dos visiones. Miguel se
  autentica en un editor embebido en la web Next.js; el sitio puede seguir
  pre-renderizando los posts publicados (ISR/regen o fetch en cliente).
- **Alternativa ligera — headless CMS git-based** (Decap/Sanity/etc.): UI de
  edición sin backend propio. Más barato, pero auth/flujo menos a la medida y
  fuera del stack canónico de Bernard.

Cuál se toma define todo lo demás — es decisión de Bernard, atada al timing del
asistente (si se hace el backend para uno, el otro va casi gratis).

## Restricciones duras
- **Una sola superficie**: el editor vive dentro de la web Next.js existente.
  Nada de panel HTML desechable ni superficie paralela (`new-project-stack`).
- **Auth real para Miguel**: solo él (y quien Bernard autorice) publica. Los
  secretos/credenciales fuera del repo (`secrets-management`).
- **Los blogs nativos conviven con `/prensa`**: prensa = cobertura externa
  (enlaces a medios); el CMS = la voz propia de Miguel publicada en el sitio.
- **Sin alucinar contenido**: el sistema NO redacta por Miguel; es su pluma. Si
  algún día el asistente sugiere texto, queda marcado como borrador a su revisión.

## Estado
Visión, no implementación. Cuando Bernard dé luz verde, decidir primero el
camino de backend (arriba), idealmente junto con [[asistente-virtual-senderito]]
para no montar infra dos veces.
