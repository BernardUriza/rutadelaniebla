# Asistente de throughput para redes (Leticia/Miguel)

Status: Proposed
Proposed: 2026-06-19 by Bernard (ideación "poco a poco" tras analizar el material de Leticia)

## What it is
Un **INGESTOR** domain-tuned al Senderito: un lugar tonto-simple donde se **habla
(Whisper), se sueltan fotos y se pega texto**, y Claude **clasifica el contenido,
decide el acomodo y escribe la entrada en la capa de datos del sitio** (evento /
galería / prensa / crónica) → preview → un tap para publicar. El **generador** de
posts/imágenes es **auxiliar**, NO el core. Imagen sintética solo para huecos,
jamás reemplazando la fotografía real de Leticia.

- **Whisper como on-ramp.** Capturan en campo (video del Mirador, notas de voz) y
  "ponen la info en muchos tipos". Voz/campo → texto es como ya trabajan.
- **No es autoría — es throughput.** Ellos escriben y diseñan bien (lo probó el
  flyer). El valor es **meter su material al sitio/canales** sin que peleen un CMS.
  Gap medido: FB (3.2K, activo) ↔ IG (estancado, 214).
- **Capa de datos como contrato.** El sitio renderiza desde entradas estructuradas
  (`lib/data.ts`: `events`, `press`, `galleryItems`…); el ingestor escribe la
  entrada, Claude elige el TIPO, no toca JSX. La ficha de reforestación montada a
  mano el 19 jun es la PRIMERA entrada de ese contrato.

## El plan de rollout (de Bernard, 19 jun) — dogfood primero, handoff al final
1. **El mount manual ES nuestro false-door, no de Leticia.** Montar a mano cada
   contenido suyo nos valida la demanda y nos da el SPEC.
2. **Construir el ingestor para NOSOTROS.** Lo operamos nosotros (vía devtools) con
   cada mensaje/contenido que manda Leticia — dogfooding real.
3. **Endurecerlo con nuestro propio uso** hasta que esté "chido" (canary: nuestro
   uso expone lo que le falta).
4. **Handoff a Leticia AL FINAL**, cuando (a) el ingestor sea sólido Y (b) nos
   cansemos de hacerlo a mano: *"Leticia, ahora sube tu contenido aquí."* Self-serve
   es el último paso, no el primero.

## Por qué NO es "asistente de redacción" (la corrección del 19 jun)
La premisa "no pueden escribir" quedó **refutada con evidencia**: Leticia mandó un
**flyer de Jornadas de Reforestación 2026** y un **póster de marca**, ambos
profesionales y completos; un post genérico generado por IA salió **peor** y sin
su info real. Ellos escriben Y diseñan. El dolor no es producir — es **throughput
y meterlo al sitio/canales**. Ella ya actúa como colaboradora: alimenta material
esperando que se **cure y se publique con criterio**. Ver memoria
`senderito-stakeholders`.

## Canonical path to reuse (Art. 6)
Patrón insult-ai / `free-intelligence` / template `python-bot` sobre la cuota
**Claude Max** (mismo backend que [[asistente-virtual-senderito]] y
[[cms-blogs-miguel]] — si se monta fi-runner para uno, este va casi gratis).
Whisper: reusar el motor de `videopipe`/faster-whisper, no rescriptear.

## Stress-test pendiente (Art. 7) antes de construir nada
- ¿El "multiplicar a canales" les quita dolor real, o también lo hacen bien ya?
- ¿La generación de imágenes aporta o se siente falsa junto a la foto real?
- **El false-door barato primero:** montar a mano la **ficha del evento del
  domingo 21** en el sitio (info real del flyer) + ordenar Prensa con el artículo
  2020 al inicio (como pidió Leticia). Si eso la prende y sigue mandando material
  → hay tool que justificar. Si no, no se construye backend.

## The decision that's the owner's
Construir el asistente es inversión en backend (fi-runner) — esperar a que el
false-door manual (evento en el sitio) confirme demanda conductual antes de
gastar. Fork de Bernard: cuándo pasar de manual → tool.

## Status / next step
Proposed. Gate = la integración manual del evento del 21 jun (esta semana). No
construir hasta ver si la curaduría+publicación manual la engancha.
