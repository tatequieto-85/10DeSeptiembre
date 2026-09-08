const CACHE_NAME = 'presentacion-v4';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/slides/2.mp4',
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
  El navegador pide el video por partes (encabezado Range). Con internet,
  dejamos que la red lo maneje directo (rápido y nativo). El video completo
  ya quedó guardado de antemano en la instalación (ver APP_SHELL), así que
  si falla la red (sin internet) armamos nosotros mismos el pedazo (206)
  que pide cada Range a partir de esa copia completa.
*/
async function handleRangeRequest(event){
  try {
    return await fetch(event.request);
  } catch (err) {
    // sin internet: seguimos abajo con la copia guardada
  }

  const cache = await caches.open(CACHE_NAME);
  const full = await cache.match(event.request.url);

  if(!full){
    return new Response('Video no disponible sin conexión.', { status: 503 });
  }

  const buffer = await full.clone().arrayBuffer();
  const total = buffer.byteLength;

  const rangeHeader = event.request.headers.get('range') || '';
  const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
  let start = 0, end = total - 1;
  if(match){
    if(match[1] !== '') start = parseInt(match[1], 10);
    if(match[2] !== '') end = parseInt(match[2], 10);
  }
  if(Number.isNaN(start)) start = 0;
  if(Number.isNaN(end) || end >= total) end = total - 1;
  if(start > end) start = 0;

  const chunk = buffer.slice(start, end + 1);
  const headers = new Headers(full.headers);
  headers.set('Content-Range', `bytes ${start}-${end}/${total}`);
  headers.set('Content-Length', String(chunk.byteLength));
  headers.set('Accept-Ranges', 'bytes');

  return new Response(chunk, {
    status: 206,
    statusText: 'Partial Content',
    headers,
  });
}

/*
  Para todo lo demás: estrategia "network-first". Si hay internet, siempre
  trae la versión más reciente (y la guarda en caché). Si falla (sin
  internet), sirve la última copia guardada.
*/
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  if (event.request.headers.has('range')) {
    event.respondWith(handleRangeRequest(event));
    return;
  }

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
