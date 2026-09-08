# Registro de versiones

## v3.1.1 — 2026-09-08
- Actualización de la imagen `2-3.jpg`.

## v3.1.0 — 2026-09-08
- Nueva diapositiva `2-3.jpg` entre el video y `3.jpg`.

## v3.0.2 — 2026-09-08
- Actualización de la imagen de la diapositiva 5 (`5.jpg`).

## v3.0.1 — 2026-09-08
- Actualización de contenido: imágenes 1, 3-8, 10-17, 19 y 20.

## v3.0.0 — 2026-09-08
- Título "INTERACTUEMOS" (mismo estilo que la diapositiva 9) arriba del quiz "Mito o Realidad".

## v2.9.2 — 2026-09-08
- Se mueve el quiz "Mito o Realidad" de la última posición a justo después de `16.jpg` (tras los 4 grandes pasos), antes de `17.jpg`, `19.jpg` y `20.jpg`.

## v2.9.1 — 2026-09-08
- La diapositiva de tarjetas (9) ya no usa `9.jpg` como fondo; ahora usa el mismo fondo compartido (`assets/fondo.gif`) que las demás diapositivas.

## v2.9.0 — 2026-09-08
- Primera diapositiva ahora usa `assets/slides/1.jpg` en vez de `UNO.gif`.

## v2.8.1 — 2026-09-08
- Actualización de la imagen de la diapositiva 6 (`6.jpg`).

## v2.8.0 — 2026-09-08
- Botones de navegación más grandes y alargados (píldora), con más contraste y menos transparencia cuando están deshabilitados, para que nunca se pierdan contra el fondo.
- Tutorial animado al cargar la página: resalta uno por uno el botón anterior, siguiente y pantalla completa con un anillo pulsante, una mano que "toca" y una etiqueta explicando su función. Se puede saltar.

## v2.7.0 — 2026-09-08
- Nuevas diapositivas de imagen `19.jpg` y `20.jpg`, antes del quiz final.

## v2.6.1 — 2026-09-08
- Corrección de orden: se reincorpora `16.jfif` como diapositiva 16; `16.jpg` pasa a ser la 17 y `17.jpg` la 18 (antes `16.jfif` se había reemplazado por error).

## v2.6.0 — 2026-09-08
- Nueva diapositiva final: quiz "Mito o Realidad" (7 afirmaciones sobre suicidio), una a la vez, con botones grandes MITO/REALIDAD, feedback con explicación y puntaje final con opción de reiniciar.

## v2.5.0 — 2026-09-08
- Diapositiva 16 ahora usa `16.jpg` en vez de `16.jfif`.
- Nueva decimoséptima diapositiva (`17.jpg`).

## v2.4.0 — 2026-09-08
- Nueva decimocuarta, decimoquinta y decimosexta diapositiva (`14.jpg`, `15.jpg`, `16.jfif`).

## v2.3.0 — 2026-09-07
- Nueva duodécima y decimotercera diapositiva de imagen (`assets/slides/12.jpg`, `assets/slides/13.jpg`).

## v2.2.0 — 2026-09-07
- Nueva décima y undécima diapositiva de imagen (`assets/slides/10.jpg`, `assets/slides/11.jpg`).

## v2.1.1 — 2026-09-07
- Se quita el resplandor gris (text-shadow) del título "INTERACTUEMOS"; queda solo el color sólido #d88b1a.

## v2.1.0 — 2026-09-07
- Tarjetas del juego más grandes y con texto más grande (legible de lejos).
- Título "INTERACTUEMOS" en color #d88b1a sobre las tarjetas.
- Se quita la capa gris que oscurecía la foto de fondo.

## v2.0.0 — 2026-09-07
- Nueva novena diapositiva: juego de tarjetas de "Validar / No validar" sobre la foto `9.jpg`. Las tarjetas se voltean al hacer clic y aparecen en orden aleatorio (revueltas) en cada carga.

## v1.9.0 — 2026-09-07
- Nueva octava diapositiva de imagen (`assets/slides/8.jpg`).

## v1.8.0 — 2026-09-07
- Nueva sexta y séptima diapositiva de imagen (`assets/slides/6.jpg`, `assets/slides/7.jpg`).

## v1.7.0 — 2026-09-07
- Botón de pantalla completa (esquina superior derecha) para ocultar la barra de direcciones del navegador durante la presentación.

## v1.6.0 — 2026-09-07
- Nueva quinta diapositiva de imagen (`assets/slides/5.jpg`).

## v1.5.0 — 2026-09-07
- Nueva cuarta diapositiva de imagen (`assets/slides/4.jpg`).

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
