# 10 de Septiembre

Página web de una sola pantalla que combina tres etapas en secuencia:

1. **Video** de introducción (autoplay).
2. **Presentación** estilo diapositivas con navegación.
3. **Juego** interactivo final.

## Estructura

```
index.html      # página principal (las tres etapas)
assets/         # video, imágenes y demás recursos
```

## Cómo verla localmente

Abrí `index.html` en el navegador, o serví la carpeta con cualquier servidor estático:

```
npx serve .
```

## Publicar en GitHub Pages

1. Hacer push de este repo a la rama `main`.
2. En GitHub: **Settings → Pages → Source**, elegir la rama `main` y la carpeta `/ (root)`.
3. La página queda publicada en `https://tatequieto-85.github.io/10DeSeptiembre/`.
