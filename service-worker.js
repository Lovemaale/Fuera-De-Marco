const CACHE_NAME = "fuera-de-marco-v10";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/logoapp.png",
  "./assets/flormorado.png",
  "./assets/caracol.png",
  "./assets/chats.png",
  "./assets/corazon.png",
  "./assets/estrella.png",
  "./assets/camara.png",
  "./assets/moño.png",
  "./assets/ositosgominola.png",
  "./assets/pin.png",
  "./assets/revista.png",
  "./assets/descarga.png",
  "./assets/decorado.png",
  "./assets/espejo.png",
  "./assets/mensaje.png",
  "./assets/telefono.png",
  "./assets/ventana.png",
  "./assets/amor.jpg",
  "./assets/amo.jpg",
  "./assets/La portada de primavera.jpg",
  "./assets/Anuncio ficticio de cuidado personal.jpg",
  "./assets/arte.png",
  "./assets/diversidad.jpg",
  "./assets/@nina.entrena.jpg",
  "./assets/@mesacotidiana.jpg",
  "./assets/@pausabonita.jpg",
  "./assets/@pieldecerca.jpg",
  "./assets/@entendencia.jpg",
  "./assets/canondebellezadelrenacimiento1.jpg",
  "./assets/canondebellezadelosaños201.jpg",
  "./assets/canondebellezadelosaños2000.jpg",
  "./assets/actualidad.jpg",
  "./css/styles.css",
  "./js/app.js",
  "./js/data.js",
  "./js/analyzer.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === "navigate") return caches.match("./index.html");
        throw new Error("No hay conexión y este recurso no está disponible sin conexión.");
      });
    })
  );
});
