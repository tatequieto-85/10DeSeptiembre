# Registro de versiones

## v1.4.1 — 2026-09-07
- Tercera diapositiva ahora usa `assets/slides/3.jpg` en vez de `3.webp`.

## v1.4.0 — 2026-09-07
- Nueva tercera diapositiva de imagen (`assets/slides/3.webp`).

## v1.3.1 — 2026-09-07
- Se quita la diapositiva en blanco. Ahora quedan dos: 1) imagen de presentación, 2) video.

## v1.3.0 — 2026-09-07
- Nueva tercera diapositiva de video (`assets/slides/2.mp4`), centrada en pantalla.
- Clic sobre el video: se expande a pantalla completa dejando libre el alto de las flechas de navegación (nunca las tapa).

## v1.2.1 — 2026-09-07
- Primera diapositiva ahora es `assets/slides/UNO.gif` en vez de `UNO.webp`.

## v1.2.0 — 2026-09-07
- Fondo (`assets/fondo.gif`) aplicado a todas las diapositivas excepto la primera.
- Nueva segunda diapositiva (`blank`) que solo muestra ese fondo.

## v1.1.0 — 2026-09-07
- Soporte de diapositivas tipo imagen (`type: 'image'`).
- Primera diapositiva ahora es `assets/slides/UNO.webp` en vez del PDF.

## v1.0.0 — 2026-09-07
- Visor de diapositivas (PDF/video) con flechas de navegación (anterior/siguiente) en la esquina inferior derecha.
- Contador de diapositiva en la esquina inferior izquierda.
- Los PDF se renderizan como imagen (canvas vía PDF.js), sin la vista/barra nativa del navegador.
- Primera diapositiva: `assets/slides/presentacion.pdf`.
