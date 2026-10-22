/* Kompak service worker: simpan halaman dan pustaka supaya bisa dipakai offline. */
var V = 'kompak-3181bdfb6c';
var FILES = ["./", "kompres-foto/", "ubah-ukuran-foto/", "potong-foto/", "ubah-format-foto/", "heic-ke-jpg/", "putar-foto/", "watermark-foto/", "hapus-exif-foto/", "gambar-ke-pdf/", "pdf-ke-gambar/", "word-ke-pdf/", "pdf-ke-word/", "pdf-ke-teks/", "ocr-foto-pdf-ke-teks/", "kompres-pdf/", "gabung-pdf/", "pisah-pdf/", "atur-halaman-pdf/", "hapus-halaman-pdf/", "putar-pdf/", "nomor-halaman-pdf/", "watermark-pdf/", "kunci-pdf/", "buka-kunci-pdf/", "tanda-tangan-pdf/", "kompak.css", "kompak.js", "fonts/archivo-latin-wdth-normal.woff2", "vendor/pdf-lib.min.js", "vendor/jszip.min.js", "vendor/pdf.min.js", "vendor/pdf.worker.min.js", "favicon.svg", "icon-192.png", "site.webmanifest"];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(V).then(function (c) {
    return c.addAll(FILES.map(function (f) { return new Request(new URL(f, self.registration.scope).href, { cache: 'reload' }); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('kompak-') === 0 && k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(function (res) {
      var cp = res.clone(); caches.open(V).then(function (c) { c.put(r, cp); }); return res;
    }).catch(function () {
      return caches.match(r).then(function (m) { return m || caches.match(new URL('./', self.registration.scope).href); });
    }));
    return;
  }
  e.respondWith(caches.match(r).then(function (m) {
    return m || fetch(r).then(function (res) {
      if (res.ok) { var cp = res.clone(); caches.open(V).then(function (c) { c.put(r, cp); }); }
      return res;
    });
  }));
});
