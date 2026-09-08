const CACHE_NAME = 'presentacion-v2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

/*
  Estrategia "network-first": si hay internet, siempre trae la versión más
  reciente (y la guarda en caché). Si falla (sin internet), sirve la última
  copia guardada. Así las diapositivas ya vistas funcionan offline sin tener
  que mantener una lista manual de archivos.
*/
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Pedidos de rango (video buscando/seek) se dejan pasar directo a la red:
  // el Cache API no soporta respuestas parciales (206) y guardarlas rompe
  // la reproducción/búsqueda del video.
  if (event.request.headers.has('range')) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(()=>{});
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
