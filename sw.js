const CACHE_NAME = 'ponto-cache-v1';
const CACHED_URLS = [
  'index.html',
  'https://www.registropontoseed.pr.gov.br'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHED_URLS))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('registropontoseed.pr.gov.br')) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request))
    );
  }
});