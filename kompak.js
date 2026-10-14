(function () {
  'use strict';
  var META = {"compress": {"id": "compress", "group": "img", "slug": "kompres-foto", "icon": "compress", "kind": "image", "multi": true, "order": false, "sample": "img", "run": "Kompres", "name": "Kompres foto", "short": "Perkecil ukuran foto, bisa dengan target KB.", "lead": "Perkecil ukuran JPG, PNG, atau WebP sampai muat dikirim lewat WhatsApp atau diunggah ke formulir."}, "resize": {"id": "resize", "group": "img", "slug": "ubah-ukuran-foto", "icon": "resize", "kind": "image", "multi": true, "order": false, "sample": "img", "run": "Ubah ukuran", "name": "Ubah ukuran foto", "short": "Ubah ukuran foto dalam piksel atau persen.", "lead": "Besarkan atau kecilkan foto. Perbandingan lebar dan tinggi tetap terjaga."}, "crop": {"id": "crop", "group": "img", "slug": "potong-foto", "icon": "crop", "kind": "image", "multi": false, "order": false, "sample": "img", "run": "Potong", "name": "Potong foto", "short": "Potong foto ke rasio tertentu, termasuk pas foto.", "lead": "Geser kotak potong dan pilih rasio, misalnya 3:4 untuk pas foto atau 1:1 untuk foto profil."}, "convert": {"id": "convert", "group": "img", "slug": "ubah-format-foto", "icon": "convert", "kind": "image", "multi": true, "order": false, "sample": "img", "run": "Ubah format", "name": "Ubah format foto", "short": "Ubah JPG, PNG, dan WebP satu sama lain.", "lead": "Ganti format gambar, misalnya PNG ke JPG untuk ukuran lebih kecil, atau WebP ke JPG agar bisa dibuka di mana saja."}, "rotimg": {"id": "rotimg", "group": "img", "slug": "putar-foto", "icon": "rotate", "kind": "image", "multi": true, "order": false, "sample": "img", "run": "Terapkan", "name": "Putar & balik foto", "short": "Putar atau balik foto yang miring.", "lead": "Putar foto 90° atau 180°, atau balik ke kiri-kanan dan atas-bawah."}, "wmimg": {"id": "wmimg", "group": "img", "slug": "watermark-foto", "icon": "drop", "kind": "image", "multi": true, "order": false, "sample": "img", "run": "Pasang watermark", "name": "Watermark foto", "short": "Tulis teks hak cipta di atas foto.", "lead": "Tambahkan teks seperti nama atau © di pojok, di tengah, atau berulang di seluruh foto."}, "img2pdf": {"id": "img2pdf", "group": "conv", "slug": "gambar-ke-pdf", "icon": "imgpdf", "kind": "image", "multi": true, "order": true, "sample": "img", "run": "Buat PDF", "name": "Gambar ke PDF", "short": "Gabungkan beberapa foto jadi satu PDF.", "lead": "Susun foto atau hasil scan menjadi satu PDF. Urutan halaman mengikuti daftar, atur dengan tombol panah."}, "pdf2img": {"id": "pdf2img", "group": "conv", "slug": "pdf-ke-gambar", "icon": "pdfimg", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Ubah ke gambar", "name": "PDF ke gambar", "short": "Simpan halaman PDF sebagai PNG atau JPG.", "lead": "Ubah halaman PDF menjadi gambar. Pilih resolusi sesuai kebutuhan layar atau cetak."}, "pdf2text": {"id": "pdf2text", "group": "conv", "slug": "pdf-ke-teks", "icon": "pdftext", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Ambil teks", "name": "PDF ke teks", "short": "Ambil teks dari PDF jadi file .txt.", "lead": "Salin seluruh teks dari PDF ke file .txt. PDF hasil scan (berupa gambar) tidak punya teks yang bisa diambil."}, "cpdf": {"id": "cpdf", "group": "pdf", "slug": "kompres-pdf", "icon": "pdfsmall", "kind": "pdf", "multi": true, "order": false, "sample": "pdf1", "run": "Kompres PDF", "name": "Kompres PDF", "short": "Perkecil ukuran PDF yang besar.", "lead": "Memperkecil PDF dengan mengubah tiap halaman menjadi gambar terkompresi. Cocok untuk PDF scan. Teks di PDF biasa tidak bisa dipilih lagi setelahnya."}, "merge": {"id": "merge", "group": "pdf", "slug": "gabung-pdf", "icon": "merge", "kind": "pdf", "multi": true, "order": true, "sample": "pdf2", "run": "Gabungkan", "name": "Gabung PDF", "short": "Satukan beberapa PDF jadi satu.", "lead": "Satukan beberapa file PDF menjadi satu dokumen. Urutan mengikuti daftar, atur dengan tombol panah."}, "split": {"id": "split", "group": "pdf", "slug": "pisah-pdf", "icon": "split", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Pisahkan", "name": "Pisah PDF", "short": "Ambil halaman tertentu atau pecah per halaman.", "lead": "Ambil halaman tertentu dari sebuah PDF, atau pecah menjadi satu file per halaman."}, "organize": {"id": "organize", "group": "pdf", "slug": "atur-halaman-pdf", "icon": "organize", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Terapkan susunan", "name": "Atur halaman PDF", "short": "Urutkan, putar, dan hapus halaman dengan pratinjau.", "lead": "Lihat semua halaman, lalu geser urutannya, putar, atau hapus yang tidak perlu dalam satu langkah."}, "delpages": {"id": "delpages", "group": "pdf", "slug": "hapus-halaman-pdf", "icon": "delpages", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Hapus halaman", "name": "Hapus halaman PDF", "short": "Buang halaman yang tidak perlu.", "lead": "Hapus halaman tertentu dari PDF dan simpan sisanya sebagai file baru."}, "rotpdf": {"id": "rotpdf", "group": "pdf", "slug": "putar-pdf", "icon": "rotate", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Putar", "name": "Putar PDF", "short": "Putar halaman PDF yang terbalik.", "lead": "Putar semua halaman, atau hanya halaman tertentu, lalu simpan sebagai PDF baru."}, "pagenum": {"id": "pagenum", "group": "pdf", "slug": "nomor-halaman-pdf", "icon": "pagenum", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Beri nomor", "name": "Nomor halaman PDF", "short": "Tambah nomor di setiap halaman.", "lead": "Beri nomor halaman otomatis pada PDF, lengkap dengan pilihan posisi dan format."}, "watermark": {"id": "watermark", "group": "pdf", "slug": "watermark-pdf", "icon": "type", "kind": "pdf", "multi": false, "order": false, "sample": "pdf1", "run": "Pasang watermark", "name": "Watermark PDF", "short": "Beri teks watermark diagonal.", "lead": "Tambahkan tulisan seperti DRAFT atau RAHASIA secara diagonal di tengah setiap halaman."}};
  var CFG = window.KOMPAK_CFG || {};
  var SPA = !!CFG.spa;
  var ROOT = (document.body && document.body.getAttribute('data-root')) || '';
  var LIMIT = 5;

  /* ---------- helpers ---------- */
  var nf = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 });
  function fmt(n) {
    if (n < 1024) return nf.format(n) + ' B';
    if (n < 1048576) return nf.format(n / 1024) + ' KB';
    return nf.format(n / 1048576) + ' MB';
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function h(tag, props) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else if (v === true) e.setAttribute(k, '');
      else if (v !== false && v != null) e.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) {
      [].concat(arguments[i]).forEach(function (k) {
        if (k == null || k === false) return;
        e.append(k.nodeType ? k : document.createTextNode(k));
      });
    }
    return e;
  }
  var tick = function () { return new Promise(function (r) { setTimeout(r, 0); }); };
  function baseName(n) { return n.replace(/\.[^.]+$/, ''); }
  function pad(n) { return String(n).padStart(2, '0'); }
  function canvasBlob(c, type, q) { return new Promise(function (r) { c.toBlob(r, type, q); }); }
  function uniqueNames(list) {
    var seen = {};
    list.forEach(function (r) {
      if (!r.blob) return;
      var n = r.name, i = 1;
      while (seen[n]) { var d = r.name.lastIndexOf('.'); n = r.name.slice(0, d) + '-' + (++i) + r.name.slice(d); }
      seen[n] = 1; r.name = n;
    });
  }
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    if (!t) { t = h('div', { id: 'toast', class: 'toast', role: 'status', 'aria-live': 'polite' }); document.body.append(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 3200);
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- icons ---------- */
  var IC = {"upload": "<path d=\"M12 16V4M7.5 8.5L12 4l4.5 4.5M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15\"/>", "compress": "<path d=\"M4 14h6v6M20 10h-6V4M14 10l6-6M4 20l6-6\"/>", "resize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3\"/>", "crop": "<path d=\"M6 2v14a2 2 0 0 0 2 2h14M18 22V8a2 2 0 0 0-2-2H2\"/>", "convert": "<path d=\"M17 3l4 4-4 4M3 11V9a2 2 0 0 1 2-2h16M7 21l-4-4 4-4M21 13v2a2 2 0 0 1-2 2H3\"/>", "rotate": "<path d=\"M21 4v6h-6M20 15a8 8 0 1 1-1.9-8.3L21 10\"/>", "drop": "<path d=\"M12 3l5.5 5.5a7.8 7.8 0 1 1-11 0z\"/>", "imgpdf": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><path d=\"M21 15l-5-5L5 21\"/>", "pdfimg": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><circle cx=\"10\" cy=\"13\" r=\"1\"/><path d=\"M17 19l-3.5-3.5L8 19\"/>", "pdftext": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M9 13h6M9 17h6M9 9h2\"/>", "pdfsmall": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M12 11v6M9.5 14.5L12 17l2.5-2.5\"/>", "merge": "<path d=\"M12 3L3 7.5l9 4.5 9-4.5z\"/><path d=\"M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5\"/>", "split": "<circle cx=\"6\" cy=\"6\" r=\"2.5\"/><circle cx=\"6\" cy=\"18\" r=\"2.5\"/><path d=\"M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12\"/>", "organize": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/>", "delpages": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5\"/><path d=\"M9 15h6\"/>", "pagenum": "<path d=\"M4 9h16M4 15h16M10 3L8 21M16 3l-2 18\"/>", "type": "<path d=\"M4 7V4h16v3M9 20h6M12 4v16\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/>", "moon": "<path d=\"M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z\"/>", "back": "<path d=\"M15 5l-7 7 7 7\"/>", "close": "<path d=\"M6 6l12 12M18 6L6 18\"/>", "up": "<path d=\"M6 15l6-6 6 6\"/>", "down": "<path d=\"M6 9l6 6 6-6\"/>", "left": "<path d=\"M15 6l-6 6 6 6\"/>", "right": "<path d=\"M9 6l6 6-6 6\"/>", "eye": "<path d=\"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>"};
  function icon(n, s) {
    s = s || 22;
    return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[n] || '') + '</svg>';
  }

  /* ---------- libraries, loaded when a tool needs them ---------- */
  var CDN = 'https://cdnjs.cloudflare.com/ajax/libs/';
  var LIBS = CFG.cdn ? {
    pdflib: [CDN + 'pdf-lib/1.17.1/pdf-lib.min.js'],
    jszip: [CDN + 'jszip/3.10.1/jszip.min.js'],
    pdfjs: [CDN + 'pdf.js/3.11.174/pdf.worker.min.js', CDN + 'pdf.js/3.11.174/pdf.min.js']
  } : {
    pdflib: [ROOT + 'vendor/pdf-lib.min.js'],
    jszip: [ROOT + 'vendor/jszip.min.js'],
    pdfjs: [ROOT + 'vendor/pdf.min.js']
  };
  var NEEDS = { compress: [], resize: [], crop: [], convert: [], rotimg: [], wmimg: [], img2pdf: ['pdflib'], pdf2img: ['pdfjs'], pdf2text: ['pdfjs'], cpdf: ['pdfjs', 'pdflib'], merge: ['pdflib'], split: ['pdflib'], organize: ['pdfjs', 'pdflib'], delpages: ['pdflib'], rotpdf: ['pdflib'], pagenum: ['pdflib'], watermark: ['pdflib'] };
  var libP = {};
  function loadScript(s) {
    return new Promise(function (res, rej) {
      var el = document.createElement('script'); el.src = s; el.onload = res;
      el.onerror = function () { rej(new Error('Komponen gagal dimuat. Periksa koneksi internet lalu coba lagi.')); };
      document.head.append(el);
    });
  }
  function need(name) {
    if (!libP[name]) {
      libP[name] = LIBS[name].reduce(function (p, s) { return p.then(function () { return loadScript(s); }); }, Promise.resolve())
        .then(function () { if (name === 'pdfjs' && !CFG.cdn && window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc = ROOT + 'vendor/pdf.worker.min.js'; })
        .catch(function (e) { libP[name] = null; throw e; });
    }
    return libP[name];
  }

  /* ---------- save (downloads capability when hosted in Claude, plain download otherwise) ---------- */
  var DL = null, dlTried = false;
  async function getDL() {
    if (dlTried) return DL;
    dlTried = true;
    try { DL = window.claude && window.claude.use ? await window.claude.use('downloads') : null; } catch (e) { DL = null; }
    return DL;
  }
  async function saveBlob(blob, name) {
    var dl = await getDL();
    if (dl) {
      try { await dl.save({ filename: name, data: blob }); toast('Tersimpan: ' + name); }
      catch (e) {
        if (e && e.code === 'declined') return;
        if (e && e.code === 'rate_limited') { toast('Tunggu sebentar, lalu coba simpan lagi.'); return; }
        toast('File tidak bisa disimpan dari tampilan ini.');
      }
      return;
    }
    var u = URL.createObjectURL(blob);
    var a = h('a', { href: u, download: name, rel: 'noopener' });
    document.body.append(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(u); }, 10000);
    toast('Mengunduh ' + name);
  }

  /* ---------- image + pdf helpers ---------- */
  async function loadBitmap(file) {
    try { return await createImageBitmap(file); }
    catch (e) {
      return await new Promise(function (res, rej) {
        var img = new Image(), u = URL.createObjectURL(file);
        img.onload = function () { res(img); }; img.onerror = rej; img.src = u;
      });
    }
  }
  function closeBmp(b) { if (b && b.close) b.close(); }
  function dim(b) { return [b.naturalWidth || b.width, b.naturalHeight || b.height]; }
  function makeCanvas(bmp, w, hh, white) {
    var c = document.createElement('canvas'); c.width = w; c.height = hh;
    var x = c.getContext('2d');
    if (white) { x.fillStyle = '#fff'; x.fillRect(0, 0, w, hh); }
    x.imageSmoothingQuality = 'high'; x.drawImage(bmp, 0, 0, w, hh);
    return c;
  }
  function imgType(file) { return ['image/jpeg', 'image/png', 'image/webp'].indexOf(file.type) >= 0 ? file.type : 'image/png'; }
  function extOf(type) { return type === 'image/jpeg' ? 'jpg' : type === 'image/webp' ? 'webp' : 'png'; }

  /* Encode a bitmap; with a KB target, search quality and then size until it fits. */
  async function compressTo(bmp, o) {
    var d = dim(bmp), w = d[0], hh = d[1];
    var s = o.maxW && w > o.maxW ? o.maxW / w : 1;
    var cw = Math.max(1, Math.round(w * s)), ch = Math.max(1, Math.round(hh * s));
    if (!o.target || o.type === 'image/png') {
      var blob0 = await canvasBlob(makeCanvas(bmp, cw, ch, o.white), o.type, o.q);
      return { blob: blob0, scaled: s !== 1, w: cw, h: ch, missed: false };
    }
    var tgt = o.target * 1024, best = null;
    for (var attempt = 0; attempt < 8; attempt++) {
      var c = makeCanvas(bmp, cw, ch, o.white);
      var low = await canvasBlob(c, o.type, 0.3);
      if (low && low.size <= tgt) {
        var lo = 0.3, hi = 0.92; best = low;
        for (var i = 0; i < 7; i++) {
          var mid = (lo + hi) / 2, b = await canvasBlob(c, o.type, mid);
          if (b && b.size <= tgt) { best = b; lo = mid; } else { hi = mid; }
        }
        return { blob: best, scaled: cw !== w, w: cw, h: ch, missed: false };
      }
      best = low; cw = Math.max(1, Math.round(cw * 0.8)); ch = Math.max(1, Math.round(ch * 0.8));
      await tick();
    }
    return { blob: best, scaled: true, w: cw, h: ch, missed: true };
  }

  function parseRange(str, max, required) {
    str = (str || '').trim();
    if (!str) {
      if (required) throw new Error('Isi nomor halamannya dulu, contoh: 1-3, 5.');
      var all = []; for (var i = 1; i <= max; i++) all.push(i); return all;
    }
    var set = {};
    str.split(',').forEach(function (part) {
      part = part.trim(); if (!part) return;
      var m = part.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
      if (!m) throw new Error('Rentang "' + part + '" tidak valid. Gunakan format seperti 1-3, 5.');
      var a = +m[1], b = m[2] ? +m[2] : a;
      if (a > b) { var tmp = a; a = b; b = tmp; }
      if (a < 1 || b > max) throw new Error('Halaman di luar jangkauan. PDF ini hanya punya ' + max + ' halaman.');
      for (var p = a; p <= b; p++) set[p] = 1;
    });
    var out = Object.keys(set).map(Number).sort(function (x, y) { return x - y; });
    if (!out.length) throw new Error('Tidak ada halaman yang dipilih.');
    return out;
  }
  async function loadLibPdf(file) {
    try { return await PDFLib.PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true }); }
    catch (e) { throw new Error('"' + file.name + '" tidak bisa dibuka. File mungkin terkunci atau rusak.'); }
  }
  function getDoc(buf) {
    var o = { data: buf };
    if (!CFG.cdn) o.standardFontDataUrl = ROOT + 'vendor/standard_fonts/';
    return pdfjsLib.getDocument(o).promise;
  }
  async function openPdfJs(file) {
    try { return await getDoc(new Uint8Array(await file.arrayBuffer())); }
    catch (e) { throw new Error('"' + file.name + '" tidak bisa dibaca. File mungkin terkunci atau rusak.'); }
  }
  function pdfOut(bytes) { return new Blob([bytes], { type: 'application/pdf' }); }
  function isPdf(f) { return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }
  function isImg(f) { return f.type.indexOf('image/') === 0; }

    /* ---------- tool behavior (names and copy come from META) ---------- */
  var pagesField = function (label, ph, hint) { return { id: 'pages', type: 'text', label: label, placeholder: ph, hint: hint }; };
  function clamp(n, a, b) { return Math.min(Math.max(n, a), b); }

  /* --- crop stage --- */
  function cropStage(t, st, sec) {
    var box = $('[data-stage]', sec), it = st.items[0];
    if (!it || it.err) { box.hidden = true; box.replaceChildren(); st.stageFor = null; st.rect = null; st.api = null; return; }
    if (st.stageFor === it.id) return;
    st.stageFor = it.id; st.rect = null; st.ar = Number(getVals(t).ratio) || 0;
    box.hidden = false; box.replaceChildren();
    var img = h('img', { src: it.url, alt: 'Foto yang akan dipotong', draggable: 'false' });
    var sel = h('div', { class: 'cropbox', tabindex: '0', role: 'group', 'aria-label': 'Kotak potong. Geser untuk memindah, tarik sudut untuk mengubah ukuran. Tombol panah menggeser.' });
    ['nw', 'ne', 'sw', 'se'].forEach(function (c) { sel.append(h('span', { class: 'hd ' + c, 'data-h': c })); });
    var info = h('p', { class: 'hint cropinfo', 'aria-live': 'polite' });
    box.append(h('div', { class: 'cropwrap' }, img, sel), info);
    var MIN = 28, drag = null;

    function dims() { return { W: img.clientWidth, H: img.clientHeight }; }
    function rectPx() { var d = dims(), r = st.rect; return { x: r.x * d.W, y: r.y * d.H, w: r.w * d.W, h: r.h * d.H }; }
    function render() {
      if (!st.rect || !document.contains(sel)) return;
      var r = rectPx();
      sel.style.left = r.x + 'px'; sel.style.top = r.y + 'px'; sel.style.width = r.w + 'px'; sel.style.height = r.h + 'px';
      info.textContent = 'Area potong: ' + Math.round(st.rect.w * img.naturalWidth) + ' × ' + Math.round(st.rect.h * img.naturalHeight) + ' px';
    }
    function setPx(r) {
      var d = dims();
      r.w = clamp(r.w, 1, d.W); r.h = clamp(r.h, 1, d.H);
      r.x = clamp(r.x, 0, d.W - r.w); r.y = clamp(r.y, 0, d.H - r.h);
      st.rect = { x: r.x / d.W, y: r.y / d.H, w: r.w / d.W, h: r.h / d.H }; render();
    }
    function initRect() {
      var d = dims(), w = d.W * 0.8, hh = d.H * 0.8;
      if (st.ar) { if (w / hh > st.ar) w = hh * st.ar; else hh = w / st.ar; }
      setPx({ x: (d.W - w) / 2, y: (d.H - hh) / 2, w: w, h: hh });
    }
    function setAspect(ar) {
      st.ar = ar; if (!st.rect) return;
      var d = dims(), r = rectPx();
      if (ar) {
        var w = r.w, hh = w / ar;
        if (hh > d.H) { hh = d.H; w = hh * ar; }
        if (w > d.W) { w = d.W; hh = w / ar; }
        var cx = r.x + r.w / 2, cy = r.y + r.h / 2;
        r = { x: cx - w / 2, y: cy - hh / 2, w: w, h: hh };
      }
      setPx(r);
    }
    function sizeTo(a, px, py, d) {
      var sx = px >= a.x ? 1 : -1, sy = py >= a.y ? 1 : -1;
      var roomX = sx > 0 ? d.W - a.x : a.x, roomY = sy > 0 ? d.H - a.y : a.y;
      var w = Math.abs(px - a.x), hh = Math.abs(py - a.y), ar = st.ar;
      if (ar) {
        if (w / ar > hh) hh = w / ar; else w = hh * ar;
        if (w > roomX) { w = roomX; hh = w / ar; }
        if (hh > roomY) { hh = roomY; w = hh * ar; }
        if (w < MIN) { w = MIN; hh = w / ar; }
      } else {
        w = clamp(w, MIN, Math.max(roomX, MIN)); hh = clamp(hh, MIN, Math.max(roomY, MIN));
      }
      return { x: sx > 0 ? a.x : a.x - w, y: sy > 0 ? a.y : a.y - hh, w: w, h: hh };
    }
    sel.addEventListener('pointerdown', function (e) {
      if (!st.rect) return;
      var hd = e.target.getAttribute && e.target.getAttribute('data-h'), r = rectPx();
      if (hd) {
        var a = { nw: { x: r.x + r.w, y: r.y + r.h }, ne: { x: r.x, y: r.y + r.h }, sw: { x: r.x + r.w, y: r.y }, se: { x: r.x, y: r.y } }[hd];
        drag = { mode: 'size', a: a };
      } else { drag = { mode: 'move', ox: e.clientX, oy: e.clientY, r0: r }; }
      try { sel.setPointerCapture(e.pointerId); } catch (x) {}
      e.preventDefault();
    });
    sel.addEventListener('pointermove', function (e) {
      if (!drag) return;
      var d = dims(), b = img.getBoundingClientRect();
      if (drag.mode === 'move') {
        setPx({ x: drag.r0.x + (e.clientX - drag.ox), y: drag.r0.y + (e.clientY - drag.oy), w: drag.r0.w, h: drag.r0.h });
      } else {
        setPx(sizeTo(drag.a, clamp(e.clientX - b.left, 0, d.W), clamp(e.clientY - b.top, 0, d.H), d));
      }
    });
    var end = function () { drag = null; };
    sel.addEventListener('pointerup', end); sel.addEventListener('pointercancel', end);
    sel.addEventListener('keydown', function (e) {
      var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
      if (!k || !st.rect) return;
      e.preventDefault();
      var d = dims(), r = rectPx(), step = e.shiftKey ? 1 : 8;
      if (e.altKey) { // Alt + arrows resizes from the bottom-right corner
        var nw = r.w + k[0] * step, nh = st.ar ? nw / st.ar : r.h + k[1] * step;
        if (nw >= MIN && nh >= MIN && r.x + nw <= d.W && r.y + nh <= d.H) setPx({ x: r.x, y: r.y, w: nw, h: nh });
      } else setPx({ x: r.x + k[0] * step, y: r.y + k[1] * step, w: r.w, h: r.h });
    });
    window.addEventListener('resize', render);
    st.api = { setAspect: setAspect };
    if (img.complete && img.naturalWidth) initRect(); else img.addEventListener('load', initRect);
  }

  /* --- organize stage --- */
  function pgRotateUrl(p, cb) {
    var im = new Image();
    im.onload = function () {
      var sw = p.rot % 180 === 0, c = document.createElement('canvas');
      c.width = sw ? im.naturalWidth : im.naturalHeight; c.height = sw ? im.naturalHeight : im.naturalWidth;
      var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
      x.translate(c.width / 2, c.height / 2); x.rotate(p.rot * Math.PI / 180); x.drawImage(im, -im.naturalWidth / 2, -im.naturalHeight / 2);
      cb(c.toDataURL('image/jpeg', 0.75));
    };
    im.src = p.url0;
  }
  function drawPgs(st) {
    var box = st.box; if (!box) return;
    var ul = h('ul', { class: 'pgs' });
    st.pg.forEach(function (p, i) {
      var pa = h('div', { class: 'pa' },
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Geser halaman ' + (p.src + 1) + ' lebih awal', disabled: i === 0, html: icon('left', 16), onclick: function () { var x = st.pg[i]; st.pg[i] = st.pg[i - 1]; st.pg[i - 1] = x; drawPgs(st); } }),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Geser halaman ' + (p.src + 1) + ' lebih akhir', disabled: i === st.pg.length - 1, html: icon('right', 16), onclick: function () { var x = st.pg[i]; st.pg[i] = st.pg[i + 1]; st.pg[i + 1] = x; drawPgs(st); } }),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Putar halaman ' + (p.src + 1), html: icon('rotate', 16), onclick: function () { p.rot = (p.rot + 90) % 360; pgRotateUrl(p, function (u) { p.url = u; drawPgs(st); }); } }),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Hapus halaman ' + (p.src + 1), html: icon('close', 16), onclick: function () { st.pg.splice(i, 1); drawPgs(st); } }));
      ul.append(h('li', { class: 'pg' }, h('div', { class: 'pv' }, h('img', { src: p.url, alt: 'Halaman ' + (p.src + 1) })), h('span', { class: 'pn' }, 'Hal. ' + (p.src + 1)), pa));
    });
    var changed = st.pg.length !== st.all.length || st.pg.some(function (p, i) { return p !== st.all[i] || p.rot; });
    var bar = h('div', { class: 'listhead' }, h('span', null, st.pg.length + ' dari ' + st.total + ' halaman' + (st.done ? '' : ' (memuat…)')),
      changed ? h('button', { type: 'button', class: 'link', onclick: function () { st.all.forEach(function (p) { if (p.rot) { p.rot = 0; p.url = p.url0; } }); st.pg = st.all.slice(); drawPgs(st); } }, 'Pulihkan semua') : null);
    box.replaceChildren(bar, ul);
    refreshBar('organize');
  }
  function orgStage(t, st, sec) {
    var box = $('[data-stage]', sec), it = st.items[0];
    if (!it) { box.hidden = true; box.replaceChildren(); st.stageFor = null; st.pg = null; st.all = null; st.done = false; st.box = null; return; }
    if (it.err || !it.pages || st.stageFor === it.id) return;
    st.stageFor = it.id; st.box = box; st.pg = []; st.all = []; st.done = false; st.total = it.pages; box.hidden = false;
    if (it.pages > 300) { box.replaceChildren(h('p', { class: 'hint err' }, 'PDF ini punya ' + it.pages + ' halaman. Alat ini mendukung maksimal 300 halaman. Pecah dulu dengan alat Pisah PDF.')); st.pg = null; return; }
    box.replaceChildren(h('p', { class: 'hint' }, 'Membuat pratinjau halaman…'));
    (async function () {
      var token = it.id, doc;
      try {
        doc = await openPdfJs(it.file);
        for (var i = 1; i <= doc.numPages; i++) {
          if (st.stageFor !== token) { doc.destroy(); return; }
          var pg = await doc.getPage(i), v1 = pg.getViewport({ scale: 1 }), vp = pg.getViewport({ scale: 180 / v1.width });
          var c = document.createElement('canvas'); c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
          var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
          await pg.render({ canvasContext: x, viewport: vp }).promise;
          var u = c.toDataURL('image/jpeg', 0.75), p = { src: i - 1, rot: 0, url0: u, url: u };
          st.all.push(p); st.pg.push(p); pg.cleanup();
          if (i === 1 || i % 8 === 0) drawPgs(st);
          await tick();
        }
        doc.destroy(); st.done = true; drawPgs(st);
      } catch (e) {
        if (st.stageFor === token) { st.pg = null; box.replaceChildren(h('p', { class: 'hint err' }, 'Pratinjau halaman gagal dibuat. File mungkin terkunci atau rusak.')); refreshBar('organize'); }
      }
    })();
  }

  /* --- watermark helpers --- */
  var WM_FONT = '"Archivo Variable", Archivo, system-ui, -apple-system, "Segoe UI", sans-serif';

  var TOOLS = [
    {
      id: 'compress',
      fields: [
        { id: 'preset', type: 'seg', label: 'Tingkat kompresi', value: 'mid', options: [['hi', 'Kualitas tinggi'], ['mid', 'Seimbang'], ['lo', 'Hemat maksimal']],
          onChange: function (v, set) { var P = { hi: [85, 2560], mid: [75, 1920], lo: [60, 1280] }[v.preset]; set('q', P[0]); set('w', P[1]); } },
        { id: 'target', type: 'number', label: 'Target ukuran (KB), opsional', placeholder: 'Contoh: 200', min: 0, hint: 'Berguna untuk syarat unggah formulir. Kosongkan jika tidak perlu.' },
        { type: 'details', label: 'Pengaturan lanjutan', fields: [
          { id: 'q', type: 'range', label: 'Kualitas', min: 40, max: 95, step: 5, value: 75, unit: '%' },
          { id: 'w', type: 'select', label: 'Lebar maksimum', value: '1920', options: [['0', 'Ukuran asli'], ['3840', '3840 px (4K)'], ['2560', '2560 px'], ['1920', '1920 px (layar penuh)'], ['1280', '1280 px'], ['800', '800 px (web)']] },
          { id: 'f', type: 'select', label: 'Format hasil', value: 'jpeg', options: [['jpeg', 'JPG (paling kompatibel)'], ['webp', 'WebP (lebih kecil)'], ['png', 'PNG (tanpa kehilangan)']] }
        ] }
      ],
      go: async function (items, v, say) {
        var type = 'image/' + v.f, out = [], toJpg = false;
        if (v.target > 0 && v.f === 'png') { type = 'image/jpeg'; toJpg = true; }
        for (var i = 0; i < items.length; i++) {
          var file = items[i].file;
          say('Memproses ' + (i + 1) + ' dari ' + items.length + '…');
          try {
            var bmp = await loadBitmap(file);
            var r = await compressTo(bmp, { maxW: +v.w, q: v.q / 100, type: type, target: v.target, white: type === 'image/jpeg' });
            closeBmp(bmp);
            if (!r.blob) throw new Error('x');
            var blob = r.blob, name = baseName(file.name) + '-kompres.' + extOf(type), notes = [r.w + ' × ' + r.h + ' px'];
            if (blob.type !== type) notes.push('browser memakai ' + blob.type.replace('image/', '').toUpperCase());
            if (toJpg) notes.push('PNG diubah ke JPG');
            if (r.missed) notes.push('belum mencapai target');
            if (!v.target && blob.size >= file.size && !r.scaled && file.type === type) { blob = file; name = file.name; notes = ['sudah optimal']; }
            out.push({ name: name, blob: blob, before: file.size, orig: file, note: notes.join(' · ') });
          } catch (e) { out.push({ name: file.name, error: 'Gagal dibaca. Format mungkin tidak didukung browser.' }); }
          await tick();
        }
        return { results: out, zipName: 'foto-kompres' };
      }
    },
    {
      id: 'resize',
      fields: [
        { id: 'mode', type: 'seg', label: 'Cara mengubah', value: 'px', options: [['px', 'Piksel'], ['pct', 'Persen']] },
        { id: 'wpx', type: 'number', label: 'Lebar (px)', placeholder: 'Contoh: 1200', min: 1, show: function (v) { return v.mode === 'px'; } },
        { id: 'hpx', type: 'number', label: 'Tinggi (px)', placeholder: 'Opsional', min: 1, hint: 'Isi salah satu atau keduanya.', show: function (v) { return v.mode === 'px'; } },
        { id: 'pct', type: 'range', label: 'Skala', min: 10, max: 200, step: 5, value: 50, unit: '%', show: function (v) { return v.mode === 'pct'; } },
        { id: 'f', type: 'seg', label: 'Format hasil', value: 'orig', options: [['orig', 'Sama dengan asli'], ['jpeg', 'JPG'], ['png', 'PNG'], ['webp', 'WebP']] }
      ],
      go: async function (items, v, say) {
        if (v.mode === 'px' && !v.wpx && !v.hpx) throw new Error('Isi lebar atau tinggi dalam piksel.');
        var out = [];
        for (var i = 0; i < items.length; i++) {
          var file = items[i].file;
          say('Memproses ' + (i + 1) + ' dari ' + items.length + '…');
          try {
            var bmp = await loadBitmap(file), d = dim(bmp), s;
            if (v.mode === 'pct') s = v.pct / 100;
            else if (v.wpx && v.hpx) s = Math.min(v.wpx / d[0], v.hpx / d[1]);
            else s = v.wpx ? v.wpx / d[0] : v.hpx / d[1];
            var cw = Math.max(1, Math.round(d[0] * s)), ch = Math.max(1, Math.round(d[1] * s));
            if (cw > 16000 || ch > 16000) { closeBmp(bmp); throw new Error('big'); }
            var type = v.f === 'orig' ? imgType(file) : 'image/' + v.f;
            var blob = await canvasBlob(makeCanvas(bmp, cw, ch, type === 'image/jpeg'), type, 0.92);
            closeBmp(bmp);
            out.push({ name: baseName(file.name) + '-' + cw + 'x' + ch + '.' + extOf(type), blob: blob, note: d[0] + ' × ' + d[1] + ' → ' + cw + ' × ' + ch + ' px' });
          } catch (e) { out.push({ name: file.name, error: e.message === 'big' ? 'Hasilnya terlalu besar (maksimal 16000 px).' : 'Gagal dibaca. Format mungkin tidak didukung browser.' }); }
          await tick();
        }
        return { results: out, zipName: 'foto-ubah-ukuran' };
      }
    },
    {
      id: 'crop',
      onItems: cropStage,
      fields: [
        { id: 'ratio', type: 'seg', label: 'Rasio', value: 'free', options: [['free', 'Bebas'], ['1', '1:1'], ['0.75', '3:4'], ['0.6667', '2:3'], ['1.3333', '4:3'], ['1.7778', '16:9']],
          hint: 'Pas foto 3×4 memakai 3:4. Pas foto 2×3 dan 4×6 memakai 2:3.',
          onChange: function (v) { var st = S.crop; if (st.api) st.api.setAspect(Number(v.ratio) || 0); } },
        { id: 'outw', type: 'number', label: 'Lebar hasil (px), opsional', placeholder: 'Kosongkan untuk ukuran asli', min: 1, hint: 'Pas foto 3×4 cm pada 300 dpi: lebar 354 px.' }
      ],
      go: async function (items, v) {
        var st = S.crop, file = items[0].file;
        if (!st.rect) throw new Error('Tunggu sampai foto selesai dimuat, lalu coba lagi.');
        var bmp = await loadBitmap(file), d = dim(bmp), r = st.rect;
        var sx = Math.round(r.x * d[0]), sy = Math.round(r.y * d[1]);
        var sw = Math.max(1, Math.min(Math.round(r.w * d[0]), d[0] - sx)), sh = Math.max(1, Math.min(Math.round(r.h * d[1]), d[1] - sy));
        var ow = sw, oh = sh;
        if (v.outw > 0) { ow = Math.round(v.outw); oh = Math.max(1, Math.round(sh * (ow / sw))); }
        if (ow > 16000 || oh > 16000) { closeBmp(bmp); throw new Error('Hasilnya terlalu besar (maksimal 16000 px).'); }
        var type = imgType(file), c = document.createElement('canvas'); c.width = ow; c.height = oh;
        var x = c.getContext('2d');
        if (type === 'image/jpeg') { x.fillStyle = '#fff'; x.fillRect(0, 0, ow, oh); }
        x.imageSmoothingQuality = 'high'; x.drawImage(bmp, sx, sy, sw, sh, 0, 0, ow, oh); closeBmp(bmp);
        var blob = await canvasBlob(c, type, 0.92);
        return { results: [{ name: baseName(file.name) + '-potong.' + extOf(type), blob: blob, note: ow + ' × ' + oh + ' px' }], note: ow + ' × ' + oh + ' px' };
      }
    },
    {
      id: 'convert',
      fields: [
        { id: 'to', type: 'seg', label: 'Jadikan', value: 'jpeg', options: [['jpeg', 'JPG'], ['png', 'PNG'], ['webp', 'WebP']] },
        { id: 'q', type: 'range', label: 'Kualitas', min: 50, max: 100, step: 5, value: 90, unit: '%', show: function (v) { return v.to !== 'png'; } }
      ],
      go: async function (items, v, say) {
        var type = 'image/' + v.to, out = [];
        for (var i = 0; i < items.length; i++) {
          var file = items[i].file;
          say('Memproses ' + (i + 1) + ' dari ' + items.length + '…');
          try {
            var bmp = await loadBitmap(file), d = dim(bmp);
            var blob = await canvasBlob(makeCanvas(bmp, d[0], d[1], type === 'image/jpeg'), type, v.q / 100);
            closeBmp(bmp);
            out.push({ name: baseName(file.name) + '.' + extOf(type), blob: blob, before: file.size, note: d[0] + ' × ' + d[1] + ' px' });
          } catch (e) { out.push({ name: file.name, error: 'Gagal dibaca. Format mungkin tidak didukung browser.' }); }
          await tick();
        }
        return { results: out, zipName: 'foto-format-baru' };
      }
    },
    {
      id: 'rotimg',
      fields: [
        { id: 'act', type: 'seg', label: 'Tindakan', value: 'cw', options: [['cw', 'Putar 90° kanan'], ['ccw', 'Putar 90° kiri'], ['r180', 'Putar 180°'], ['fh', 'Balik kiri-kanan'], ['fv', 'Balik atas-bawah']] }
      ],
      go: async function (items, v, say) {
        var out = [];
        for (var i = 0; i < items.length; i++) {
          var file = items[i].file;
          say('Memproses ' + (i + 1) + ' dari ' + items.length + '…');
          try {
            var bmp = await loadBitmap(file), d = dim(bmp), w = d[0], hh = d[1];
            var swap = v.act === 'cw' || v.act === 'ccw', type = imgType(file);
            var c = document.createElement('canvas'); c.width = swap ? hh : w; c.height = swap ? w : hh;
            var x = c.getContext('2d');
            if (type === 'image/jpeg') { x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); }
            if (v.act === 'cw') { x.translate(hh, 0); x.rotate(Math.PI / 2); }
            else if (v.act === 'ccw') { x.translate(0, w); x.rotate(-Math.PI / 2); }
            else if (v.act === 'r180') { x.translate(w, hh); x.rotate(Math.PI); }
            else if (v.act === 'fh') { x.translate(w, 0); x.scale(-1, 1); }
            else { x.translate(0, hh); x.scale(1, -1); }
            x.drawImage(bmp, 0, 0); closeBmp(bmp);
            out.push({ name: baseName(file.name) + '-putar.' + extOf(type), blob: await canvasBlob(c, type, 0.92), note: c.width + ' × ' + c.height + ' px' });
          } catch (e) { out.push({ name: file.name, error: 'Gagal dibaca. Format mungkin tidak didukung browser.' }); }
          await tick();
        }
        return { results: out, zipName: 'foto-putar' };
      }
    },
    {
      id: 'wmimg',
      fields: [
        { id: 'text', type: 'text', label: 'Teks watermark', placeholder: 'Contoh: © Nama Anda' },
        { id: 'pos', type: 'seg', label: 'Posisi', value: 'br', options: [['br', 'Pojok kanan bawah'], ['c', 'Tengah'], ['tile', 'Berulang']] },
        { id: 'size', type: 'range', label: 'Ukuran teks', min: 2, max: 12, step: 1, value: 5, unit: '%', hint: 'Persen dari lebar foto.' },
        { id: 'op', type: 'range', label: 'Kepekatan', min: 15, max: 90, step: 5, value: 55, unit: '%' },
        { id: 'col', type: 'seg', label: 'Warna', value: 'w', options: [['w', 'Putih'], ['k', 'Hitam']] }
      ],
      go: async function (items, v, say) {
        var txt = (v.text || '').trim();
        if (!txt) throw new Error('Isi teks watermark dulu.');
        try { await document.fonts.load('700 24px ' + WM_FONT); } catch (e) {}
        var out = [];
        for (var i = 0; i < items.length; i++) {
          var file = items[i].file;
          say('Memproses ' + (i + 1) + ' dari ' + items.length + '…');
          try {
            var bmp = await loadBitmap(file), d = dim(bmp), type = imgType(file), w = d[0], hh = d[1];
            var c = makeCanvas(bmp, w, hh, type === 'image/jpeg'); closeBmp(bmp);
            var x = c.getContext('2d'), sz = Math.max(12, Math.round(w * v.size / 100));
            var fg = v.col === 'w' ? '#ffffff' : '#000000', bg = v.col === 'w' ? '#000000' : '#ffffff';
            x.font = '700 ' + sz + 'px ' + WM_FONT; x.globalAlpha = v.op / 100; x.lineJoin = 'round'; x.lineWidth = Math.max(2, sz / 12);
            var put = function (tx, ty) { x.strokeStyle = bg; x.globalAlpha = v.op / 100 * 0.45; x.strokeText(txt, tx, ty); x.globalAlpha = v.op / 100; x.fillStyle = fg; x.fillText(txt, tx, ty); };
            if (v.pos === 'br') { x.textAlign = 'right'; x.textBaseline = 'alphabetic'; put(w - sz * 0.6, hh - sz * 0.6); }
            else {
              x.textAlign = 'center'; x.textBaseline = 'middle'; x.translate(w / 2, hh / 2); x.rotate(-Math.PI / 6);
              if (v.pos === 'c') put(0, 0);
              else {
                var ext = Math.hypot(w, hh), tw = x.measureText(txt).width + sz * 2.2, th = sz * 3.4, row = 0;
                for (var yy = -ext / 2; yy < ext / 2; yy += th, row++) for (var xx = -ext / 2 + (row % 2 ? tw / 2 : 0); xx < ext / 2; xx += tw) put(xx, yy);
              }
            }
            out.push({ name: baseName(file.name) + '-watermark.' + extOf(type), blob: await canvasBlob(c, type, 0.92), note: w + ' × ' + hh + ' px' });
          } catch (e) { out.push({ name: file.name, error: 'Gagal diproses. Format mungkin tidak didukung browser.' }); }
          await tick();
        }
        return { results: out, zipName: 'foto-watermark' };
      }
    },
    {
      id: 'img2pdf',
      fields: [
        { id: 'size', type: 'seg', label: 'Ukuran halaman', value: 'a4', options: [['a4', 'A4'], ['letter', 'Letter'], ['fit', 'Ikuti gambar']] },
        { id: 'margin', type: 'seg', label: 'Margin', value: '10', options: [['0', 'Tanpa'], ['10', '10 mm'], ['20', '20 mm']] },
        { id: 'q', type: 'seg', label: 'Ukuran file', value: 'mid', options: [['hi', 'Kualitas asli'], ['mid', 'Seimbang'], ['lo', 'Kecil']] }
      ],
      go: async function (items, v, say) {
        var PD = PDFLib.PDFDocument, cfg = { hi: { max: 0, q: 0.92 }, mid: { max: 2000, q: 0.8 }, lo: { max: 1400, q: 0.6 } }[v.q];
        var doc = await PD.create(), M = Number(v.margin) * 2.83465, n = 0;
        for (var i = 0; i < items.length; i++) {
          say('Menambahkan gambar ' + (i + 1) + ' dari ' + items.length + '…');
          var file = items[i].file, bmp;
          try { bmp = await loadBitmap(file); } catch (e) { throw new Error('Tidak bisa membaca "' + file.name + '".'); }
          var d = dim(bmp), s = cfg.max && d[0] > cfg.max ? cfg.max / d[0] : 1;
          var iw = Math.round(d[0] * s), ih = Math.round(d[1] * s);
          var asPng = v.q === 'hi' && file.type === 'image/png';
          var blob = await canvasBlob(makeCanvas(bmp, iw, ih, !asPng), asPng ? 'image/png' : 'image/jpeg', cfg.q);
          closeBmp(bmp);
          var bytes = new Uint8Array(await blob.arrayBuffer());
          var img = asPng ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
          var pw, ph, dw, dh;
          if (v.size === 'fit') { dw = iw * 0.75; dh = ih * 0.75; pw = dw + 2 * M; ph = dh + 2 * M; }
          else {
            pw = v.size === 'a4' ? 595.28 : 612; ph = v.size === 'a4' ? 841.89 : 792;
            if (iw > ih) { var t = pw; pw = ph; ph = t; }
            var sc = Math.min((pw - 2 * M) / iw, (ph - 2 * M) / ih); dw = iw * sc; dh = ih * sc;
          }
          doc.addPage([pw, ph]).drawImage(img, { x: (pw - dw) / 2, y: (ph - dh) / 2, width: dw, height: dh });
          n++; await tick();
        }
        var nm = items.length === 1 ? baseName(items[0].file.name) + '.pdf' : 'gambar-gabungan.pdf';
        return { results: [{ name: nm, blob: pdfOut(await doc.save()), note: n + ' halaman' }], note: 'PDF ' + n + ' halaman' };
      }
    },
    {
      id: 'pdf2img',
      fields: [
        { id: 'f', type: 'seg', label: 'Format', value: 'png', options: [['png', 'PNG (tajam)'], ['jpeg', 'JPG (lebih kecil)']] },
        { id: 'dpi', type: 'seg', label: 'Resolusi', value: '150', options: [['72', '72 dpi'], ['150', '150 dpi'], ['200', '200 dpi'], ['300', '300 dpi']] },
        pagesField('Halaman', 'Semua, atau 1-3, 5')
      ],
      go: async function (items, v, say) {
        var file = items[0].file, ext = v.f === 'jpeg' ? 'jpg' : 'png', type = 'image/' + v.f;
        var doc = await openPdfJs(file), out = [];
        try {
          var pages = parseRange(v.pages, doc.numPages, false);
          for (var i = 0; i < pages.length; i++) {
            say('Mengubah halaman ' + pages[i] + ' (' + (i + 1) + ' dari ' + pages.length + ')…');
            var pg = await doc.getPage(pages[i]), scale = Number(v.dpi) / 72, vp = pg.getViewport({ scale: scale });
            var area = vp.width * vp.height;
            if (area > 36e6 || vp.width > 16000 || vp.height > 16000) {
              scale *= Math.min(Math.sqrt(36e6 / area), 16000 / vp.width, 16000 / vp.height); vp = pg.getViewport({ scale: scale });
            }
            var c = document.createElement('canvas'); c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
            var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
            await pg.render({ canvasContext: x, viewport: vp }).promise;
            out.push({ name: baseName(file.name) + '-hal-' + pad(pages[i]) + '.' + ext, blob: await canvasBlob(c, type, 0.92), note: c.width + ' × ' + c.height + ' px' });
            pg.cleanup(); await tick();
          }
        } finally { doc.destroy(); }
        return { results: out, zipName: baseName(file.name) + '-gambar', note: out.length + ' gambar' };
      }
    },
    {
      id: 'pdf2text',
      fields: [pagesField('Halaman', 'Semua, atau 1-3, 5')],
      go: async function (items, v, say) {
        var file = items[0].file, doc = await openPdfJs(file), parts = [], chars = 0;
        try {
          var pages = parseRange(v.pages, doc.numPages, false);
          for (var i = 0; i < pages.length; i++) {
            say('Membaca halaman ' + pages[i] + ' (' + (i + 1) + ' dari ' + pages.length + ')…');
            var pg = await doc.getPage(pages[i]), tc = await pg.getTextContent(), line = '', lastY = null, txt = '';
            tc.items.forEach(function (it) {
              if (!('str' in it)) return;
              var y = it.transform[5];
              if (lastY !== null && Math.abs(y - lastY) > 2) { txt += line.trim() + '\n'; line = ''; }
              line += it.str + (it.hasEOL ? '\n' : ' '); lastY = y;
            });
            txt += line.trim(); chars += txt.replace(/\s/g, '').length;
            parts.push('--- Halaman ' + pages[i] + ' ---\n' + txt); pg.cleanup(); await tick();
          }
        } finally { doc.destroy(); }
        if (!chars) throw new Error('Tidak ada teks yang bisa diambil. PDF ini mungkin hasil scan (berupa gambar).');
        var blob = new Blob([parts.join('\n\n')], { type: 'text/plain;charset=utf-8' });
        return { results: [{ name: baseName(file.name) + '.txt', blob: blob, note: chars + ' karakter' }], note: 'Teks siap disimpan' };
      }
    },
    {
      id: 'cpdf',
      fields: [
        { id: 'lv', type: 'seg', label: 'Tingkat kompresi', value: 'mid', options: [['hi', 'Tajam'], ['mid', 'Seimbang'], ['lo', 'Hemat maksimal']] }
      ],
      go: async function (items, v, say) {
        var P = { hi: [170, 0.8], mid: [130, 0.7], lo: [100, 0.55] }[v.lv], out = [];
        for (var k = 0; k < items.length; k++) {
          var file = items[k].file;
          try {
            var doc = await openPdfJs(file), dest = await PDFLib.PDFDocument.create();
            try {
              for (var p = 1; p <= doc.numPages; p++) {
                say('File ' + (k + 1) + ' dari ' + items.length + ', halaman ' + p + ' dari ' + doc.numPages + '…');
                var pg = await doc.getPage(p), v1 = pg.getViewport({ scale: 1 }), vp = pg.getViewport({ scale: P[0] / 72 });
                var c = document.createElement('canvas'); c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
                var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
                await pg.render({ canvasContext: x, viewport: vp }).promise;
                var jb = new Uint8Array(await (await canvasBlob(c, 'image/jpeg', P[1])).arrayBuffer());
                var im = await dest.embedJpg(jb);
                dest.addPage([v1.width, v1.height]).drawImage(im, { x: 0, y: 0, width: v1.width, height: v1.height });
                pg.cleanup(); await tick();
              }
            } finally { doc.destroy(); }
            var blob = pdfOut(await dest.save()), name = baseName(file.name) + '-kompres.pdf', note = '';
            if (blob.size >= file.size) { blob = file; name = file.name; note = 'sudah kecil, file asli dipertahankan'; }
            out.push({ name: name, blob: blob, before: file.size, note: note });
          } catch (e) { out.push({ name: file.name, error: e.message || 'Gagal diproses.' }); }
        }
        return { results: out, zipName: 'pdf-kompres' };
      }
    },
    {
      id: 'merge',
      fields: [],
      go: async function (items, v, say) {
        if (items.length < 2) throw new Error('Tambahkan minimal 2 file PDF untuk digabung.');
        var dest = await PDFLib.PDFDocument.create(), total = 0;
        for (var i = 0; i < items.length; i++) {
          say('Menggabung ' + (i + 1) + ' dari ' + items.length + '…');
          var src = await loadLibPdf(items[i].file), pgs = await dest.copyPages(src, src.getPageIndices());
          pgs.forEach(function (p) { dest.addPage(p); }); total += pgs.length; await tick();
        }
        return { results: [{ name: 'gabungan.pdf', blob: pdfOut(await dest.save()), note: total + ' halaman' }], note: total + ' halaman dari ' + items.length + ' file' };
      }
    },
    {
      id: 'split',
      fields: [
        { id: 'mode', type: 'seg', label: 'Cara memisah', value: 'range', options: [['range', 'Ambil halaman tertentu'], ['each', 'Satu file per halaman']] },
        { id: 'pages', type: 'text', label: 'Halaman yang diambil', placeholder: 'Contoh: 1-3, 5', show: function (v) { return v.mode === 'range'; } }
      ],
      go: async function (items, v, say) {
        var it = items[0], base = baseName(it.file.name), src = await loadLibPdf(it.file), n = src.getPageCount(), out = [], PD = PDFLib.PDFDocument;
        if (v.mode === 'range') {
          var pages = parseRange(v.pages, n, true), d = await PD.create(), cp = await d.copyPages(src, pages.map(function (p) { return p - 1; }));
          cp.forEach(function (p) { d.addPage(p); });
          out.push({ name: base + '-terpilih.pdf', blob: pdfOut(await d.save()), note: pages.length + ' halaman' });
        } else {
          for (var p = 0; p < n; p++) {
            say('Memisah halaman ' + (p + 1) + ' dari ' + n + '…');
            var d2 = await PD.create(), c2 = await d2.copyPages(src, [p]); d2.addPage(c2[0]);
            out.push({ name: base + '-hal-' + pad(p + 1) + '.pdf', blob: pdfOut(await d2.save()), note: '1 halaman' }); await tick();
          }
        }
        return { results: out, zipName: base + '-terpisah', note: out.length + ' file' };
      }
    },
    {
      id: 'organize',
      onItems: orgStage,
      ready: function (st) { return !!st.done; },
      fields: [],
      go: async function (items) {
        var st = S.organize, file = items[0].file;
        if (!st.pg || !st.done) throw new Error('Tunggu sampai pratinjau halaman selesai dimuat.');
        if (!st.pg.length) throw new Error('Tidak ada halaman tersisa. Tekan Pulihkan semua.');
        var src = await loadLibPdf(file), dest = await PDFLib.PDFDocument.create();
        var pages = await dest.copyPages(src, st.pg.map(function (p) { return p.src; }));
        pages.forEach(function (pg, i) {
          var rot = st.pg[i].rot;
          if (rot) pg.setRotation(PDFLib.degrees((pg.getRotation().angle + rot) % 360));
          dest.addPage(pg);
        });
        return { results: [{ name: baseName(file.name) + '-diatur.pdf', blob: pdfOut(await dest.save()), note: pages.length + ' halaman' }], note: pages.length + ' halaman' };
      }
    },
    {
      id: 'delpages',
      fields: [pagesField('Halaman yang dihapus', 'Contoh: 2, 5-7')],
      go: async function (items, v) {
        var file = items[0].file, src = await loadLibPdf(file), n = src.getPageCount(), pages = parseRange(v.pages, n, true);
        if (pages.length >= n) throw new Error('Tidak bisa menghapus semua halaman.');
        pages.slice().reverse().forEach(function (p) { src.removePage(p - 1); });
        return { results: [{ name: baseName(file.name) + '-tanpa-hal.pdf', blob: pdfOut(await src.save()), note: src.getPageCount() + ' halaman tersisa' }], note: src.getPageCount() + ' halaman tersisa' };
      }
    },
    {
      id: 'rotpdf',
      fields: [
        { id: 'angle', type: 'seg', label: 'Putar', value: '90', options: [['90', '90° kanan'], ['180', '180°'], ['270', '90° kiri']] },
        pagesField('Halaman', 'Kosongkan untuk semua halaman', 'Contoh: 1-3, 5')
      ],
      go: async function (items, v) {
        var file = items[0].file, src = await loadLibPdf(file), pages = parseRange(v.pages, src.getPageCount(), false);
        pages.forEach(function (p) { var pg = src.getPage(p - 1); pg.setRotation(PDFLib.degrees((pg.getRotation().angle + Number(v.angle)) % 360)); });
        return { results: [{ name: baseName(file.name) + '-putar.pdf', blob: pdfOut(await src.save()), note: pages.length + ' halaman diputar' }], note: pages.length + ' halaman diputar' };
      }
    },
    {
      id: 'pagenum',
      fields: [
        { id: 'pos', type: 'select', label: 'Posisi', value: 'bc', options: [['bc', 'Bawah tengah'], ['br', 'Bawah kanan'], ['bl', 'Bawah kiri'], ['tc', 'Atas tengah'], ['tr', 'Atas kanan'], ['tl', 'Atas kiri']] },
        { id: 'fm', type: 'select', label: 'Format', value: 'n', options: [['n', '1, 2, 3'], ['np', 'Halaman 1'], ['nofm', '1 / 10']] },
        { id: 'start', type: 'number', label: 'Mulai dari nomor', value: 1, min: 1 }
      ],
      go: async function (items, v) {
        var file = items[0].file, src = await loadLibPdf(file), font = await src.embedFont(PDFLib.StandardFonts.Helvetica), n = src.getPageCount(), st = v.start || 1;
        src.getPages().forEach(function (pg, i) {
          var num = st + i, txt = v.fm === 'np' ? 'Halaman ' + num : v.fm === 'nofm' ? num + ' / ' + (st + n - 1) : String(num);
          var sz = 11, tw = font.widthOfTextAtSize(txt, sz), W = pg.getWidth(), H = pg.getHeight(), m = 28;
          var x = v.pos[1] === 'c' ? (W - tw) / 2 : v.pos[1] === 'r' ? W - m - tw : m, y = v.pos[0] === 'b' ? m : H - m - sz;
          pg.drawText(txt, { x: x, y: y, size: sz, font: font, color: PDFLib.rgb(0.2, 0.2, 0.2) });
        });
        return { results: [{ name: baseName(file.name) + '-nomor.pdf', blob: pdfOut(await src.save()), note: n + ' halaman' }], note: n + ' halaman diberi nomor' };
      }
    },
    {
      id: 'watermark',
      fields: [
        { id: 'text', type: 'text', label: 'Teks watermark', value: 'DRAFT', placeholder: 'Contoh: RAHASIA' },
        { id: 'op', type: 'range', label: 'Kepekatan', min: 10, max: 60, step: 5, value: 25, unit: '%' }
      ],
      go: async function (items, v) {
        var txt = (v.text || '').trim();
        if (!txt) throw new Error('Isi teks watermark dulu.');
        var file = items[0].file, src = await loadLibPdf(file), font = await src.embedFont(PDFLib.StandardFonts.HelveticaBold), w1;
        try { w1 = font.widthOfTextAtSize(txt, 1); } catch (e) { throw new Error('Teks watermark hanya mendukung huruf latin, angka, dan tanda baca umum.'); }
        var th = Math.PI / 4;
        src.getPages().forEach(function (pg) {
          var W = pg.getWidth(), H = pg.getHeight(), sz = Math.max(20, Math.min(160, 0.75 * Math.min(W, H) * 1.4 / w1));
          var tw = w1 * sz, hh = sz * 0.35;
          var ox = (tw / 2) * Math.cos(th) - hh * Math.sin(th), oy = (tw / 2) * Math.sin(th) + hh * Math.cos(th);
          pg.drawText(txt, { x: W / 2 - ox, y: H / 2 - oy, size: sz, font: font, color: PDFLib.rgb(0.5, 0.5, 0.5), opacity: v.op / 100, rotate: PDFLib.degrees(45) });
        });
        return { results: [{ name: baseName(file.name) + '-watermark.pdf', blob: pdfOut(await src.save()), note: src.getPageCount() + ' halaman' }], note: 'Watermark terpasang' };
      }
    }
  ];


  TOOLS.forEach(function (t) { var m = META[t.id] || {}; Object.keys(m).forEach(function (k) { t[k] = m[k]; }); });
  var byId = {};
  TOOLS.forEach(function (t) { byId[t.id] = t; });
  var S = {};
  TOOLS.forEach(function (t) { S[t.id] = { items: [], results: [], urls: [], busy: false, mode: 'setup', expandIn: false, expandOut: false, zipName: '', note: '', stageFor: null }; });
  var uid = 0, cur = null;

  /* ---------- fields ---------- */
  function flat(fields) {
    var out = [];
    (fields || []).forEach(function (f) { if (f.type === 'details') out = out.concat(flat(f.fields)); else out.push(f); });
    return out;
  }
  function fid(t, f) { return 'f-' + t.id + '-' + f.id; }
  function buildField(t, f) {
    var id = fid(t, f);
    if (f.type === 'details') {
      return h('details', { class: 'adv' }, h('summary', null, f.label),
        h('div', { class: 'opts inner' }, f.fields.map(function (x) { return buildField(t, x); })));
    }
    var wrap = h('div', { class: 'fld', 'data-f': f.id });
    if (f.type === 'seg') {
      wrap.append(h('span', { class: 'lbl' }, f.label));
      var box = h('div', { class: 'seg', role: 'radiogroup', 'aria-label': f.label });
      f.options.forEach(function (o) {
        box.append(h('label', null, h('input', { type: 'radio', name: id, value: o[0], checked: o[0] === f.value }), h('span', null, o[1])));
      });
      wrap.append(box);
    } else {
      wrap.append(h('label', { class: 'lbl', for: id }, f.label));
      if (f.type === 'select') {
        var sel = h('select', { id: id });
        f.options.forEach(function (o) { sel.append(h('option', { value: o[0], selected: o[0] === f.value }, o[1])); });
        wrap.append(sel);
      } else if (f.type === 'range') {
        wrap.append(h('input', { type: 'range', id: id, min: f.min, max: f.max, step: f.step, value: f.value }), h('output', { id: id + '-o', for: id }, f.value + (f.unit || '')));
      } else {
        wrap.append(h('input', { type: f.type === 'number' ? 'number' : 'text', id: id, placeholder: f.placeholder || '', value: f.value != null ? f.value : '', inputmode: f.type === 'number' ? 'numeric' : null, min: f.min, autocomplete: 'off' }));
      }
    }
    if (f.hint) wrap.append(h('small', { class: 'hint' }, f.hint));
    return wrap;
  }
  function getVals(t) {
    var v = {};
    flat(t.fields).forEach(function (f) {
      var id = fid(t, f);
      if (f.type === 'seg') { var c = document.querySelector('input[name="' + id + '"]:checked'); v[f.id] = c ? c.value : f.value; return; }
      var el = document.getElementById(id);
      if (!el) { v[f.id] = f.value; return; }
      v[f.id] = (f.type === 'range' || f.type === 'number') ? (el.value === '' ? 0 : Number(el.value)) : el.value;
    });
    return v;
  }
  function setVal(t, fieldId, val) {
    var f = flat(t.fields).filter(function (x) { return x.id === fieldId; })[0]; if (!f) return;
    var id = fid(t, f);
    if (f.type === 'seg') { var r = document.querySelector('input[name="' + id + '"][value="' + val + '"]'); if (r) r.checked = true; return; }
    var el = document.getElementById(id); if (!el) return;
    el.value = val;
    if (f.type === 'range') document.getElementById(id + '-o').textContent = val + (f.unit || '');
  }
  function refreshShow(t) {
    var v = getVals(t), sec = $('#p-' + t.id);
    flat(t.fields).forEach(function (f) { if (f.show) { var w = $('[data-f="' + f.id + '"]', sec); if (w) w.hidden = !f.show(v); } });
  }
  function wireFields(t) {
    flat(t.fields).forEach(function (f) {
      var id = fid(t, f);
      var els = f.type === 'seg' ? $$('input[name="' + id + '"]') : [document.getElementById(id)];
      els.forEach(function (el) {
        if (!el) return;
        if (f.type === 'range') el.addEventListener('input', function () { document.getElementById(id + '-o').textContent = el.value + (f.unit || ''); });
        el.addEventListener('change', function () {
          if (f.onChange) f.onChange(getVals(t), function (k, val) { setVal(t, k, val); });
          refreshShow(t);
        });
      });
    });
    refreshShow(t);
  }

  /* ---------- tool panel ---------- */
  function mount(id, el) {
    var t = byId[id]; if (!t || t._mounted || !el) return;
    t._mounted = true;
    var accept = t.kind === 'image' ? 'image/*' : 'application/pdf,.pdf';
    var dropTitle = t.kind === 'image' ? 'Tarik foto ke sini' : 'Tarik file PDF ke sini';
    var hint = (t.kind === 'image' ? 'JPG, PNG, WebP.' : 'Format PDF.') + (t.multi ? ' Boleh banyak file.' : ' Satu file per proses.') + ' Atau tempel dengan Ctrl+V.';
    var sec = h('section', { class: 'panel', id: 'p-' + id, 'aria-label': t.name });
    sec.innerHTML =
      '<div data-setup>' +
        '<div class="drop compact" data-drop><div class="msg"><b>' + dropTitle + '</b><small>' + hint + '</small></div>' +
        '<div class="btns"><button type="button" class="primary" data-pick>Pilih file</button><button type="button" class="ghost" data-sample>Pakai file contoh</button></div>' +
        '<input type="file" hidden data-input accept="' + accept + '"' + (t.multi ? ' multiple' : '') + '></div>' +
        '<div class="listhead" data-listhead hidden><span data-count></span><button type="button" class="link" data-clear>Hapus semua</button></div>' +
        '<ul class="files" data-files></ul><button type="button" class="link" data-more hidden></button>' +
        '<div class="stage" data-stage hidden></div>' +
        '<div class="opts" data-opts></div>' +
      '</div>' +
      '<div data-result hidden><div class="sum" data-sum></div><ul class="files" data-rfiles></ul><button type="button" class="link" data-rmore hidden></button></div>' +
      '<div class="runbar" hidden><div class="status" data-status role="status" aria-live="polite"></div><div class="line" data-bar></div></div>';
    el.append(sec);
    var opts = $('[data-opts]', sec);
    t.fields.forEach(function (f) { opts.append(buildField(t, f)); });
    wireFields(t);
    wireTool(t, sec);
  }

  function wireTool(t, sec) {
    var input = $('[data-input]', sec), drop = $('[data-drop]', sec), st = S[t.id];
    $('[data-pick]', sec).addEventListener('click', function () { input.click(); });
    input.addEventListener('change', function () { addFiles(t, [].slice.call(input.files)); input.value = ''; });
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { addFiles(t, [].slice.call(e.dataTransfer.files)); });
    $('[data-sample]', sec).addEventListener('click', async function () {
      setStatus(t.id, 'Membuat file contoh…');
      try { addFiles(t, await SAMPLE[t.sample]()); setStatus(t.id, ''); } catch (e) { setStatus(t.id, 'File contoh gagal dibuat.', true); }
    });
    $('[data-clear]', sec).addEventListener('click', function () { clearInputs(t.id); });
    $('[data-more]', sec).addEventListener('click', function () { st.expandIn = !st.expandIn; renderList(t.id); });
    $('[data-rmore]', sec).addEventListener('click', function () { st.expandOut = !st.expandOut; renderResults(t.id); });
  }

  function setStatus(id, msg, isErr) {
    var el = $('[data-status]', $('#p-' + id));
    el.textContent = msg || ''; el.className = 'status' + (isErr ? ' err' : '');
    refreshBar(id);
  }

  /* ---------- input files ---------- */
  function addFiles(t, files) {
    var st = S[t.id];
    var ok = files.filter(function (f) { return t.kind === 'image' ? isImg(f) : isPdf(f); });
    var skipped = files.length - ok.length;
    if (!ok.length) { setStatus(t.id, 'Format tidak sesuai. Pilih file ' + (t.kind === 'image' ? 'gambar.' : 'PDF.'), true); return; }
    if (!t.multi) { releaseItems(st); st.items = []; ok = ok.slice(0, 1); }
    ok.forEach(function (f) {
      var it = { id: ++uid, file: f, url: null, pages: null, thumb: null, err: null };
      if (t.kind === 'image') it.url = URL.createObjectURL(f);
      st.items.push(it);
      if (t.kind === 'pdf') pdfMeta(t, it);
    });
    clearResults(t.id); setMode(t.id, 'setup', true);
    renderList(t.id);
    setStatus(t.id, skipped ? skipped + ' file dilewati karena formatnya tidak sesuai.' : '');
  }
  function releaseItems(st) { st.items.forEach(function (i) { if (i.url) URL.revokeObjectURL(i.url); }); }
  function clearInputs(id) { var st = S[id]; releaseItems(st); st.items = []; clearResults(id); setMode(id, 'setup', true); renderList(id); setStatus(id, ''); }

  async function pdfMeta(t, it) {
    try {
      await need('pdfjs');
      var doc = await getDoc(new Uint8Array(await it.file.arrayBuffer()));
      it.pages = doc.numPages;
      var pg = await doc.getPage(1), vp = pg.getViewport({ scale: 0.3 });
      var c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
      var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
      await pg.render({ canvasContext: x, viewport: vp }).promise;
      it.thumb = c.toDataURL('image/jpeg', 0.7); doc.destroy();
    } catch (e) { if (!it.pages) it.err = 'PDF tidak bisa dibaca. File mungkin terkunci atau rusak.'; }
    renderList(t.id);
  }

  function iconBtn(label, ic, onclick, disabled) {
    return h('button', { type: 'button', class: 'icon-btn', 'aria-label': label, title: label, disabled: !!disabled, html: icon(ic, 16), onclick: onclick });
  }
  function renderList(id) {
    var t = byId[id], st = S[id], sec = $('#p-' + id), ul = $('[data-files]', sec); ul.replaceChildren();
    var total = st.items.reduce(function (s, i) { return s + i.file.size; }, 0);
    $('[data-listhead]', sec).hidden = !st.items.length;
    $('[data-count]', sec).textContent = st.items.length + ' file, ' + fmt(total);
    $('[data-drop]', sec).classList.toggle('has', st.items.length > 0);
    $('[data-pick]', sec).textContent = st.items.length ? (t.multi ? 'Tambah file' : 'Ganti file') : 'Pilih file';
    var shown = st.expandIn ? st.items : st.items.slice(0, LIMIT);
    shown.forEach(function (it) {
      var i = st.items.indexOf(it), thumb;
      if (t.kind === 'image' && !it.err) {
        thumb = h('img', { class: 'thumb', src: it.url, alt: '', onerror: function () { it.err = 'Format gambar ini tidak didukung browser.'; renderList(id); } });
      } else if (it.thumb) { thumb = h('img', { class: 'thumb', src: it.thumb, alt: '' }); }
      else { thumb = h('div', { class: 'thumb' }, t.kind === 'pdf' ? 'PDF' : '!'); }
      var meta = it.err ? h('div', { class: 'meta err' }, it.err) : h('div', { class: 'meta' }, fmt(it.file.size), it.pages ? h('span', null, it.pages + ' halaman') : null);
      var acts = h('div', { class: 'acts' });
      if (t.order && st.items.length > 1) {
        acts.append(iconBtn('Naikkan ' + it.file.name, 'up', function () { moveItem(id, i, -1); }, i === 0), iconBtn('Turunkan ' + it.file.name, 'down', function () { moveItem(id, i, 1); }, i === st.items.length - 1));
      }
      acts.append(iconBtn('Hapus ' + it.file.name, 'close', function () { removeItem(id, it); }));
      ul.append(h('li', { class: 'row' + (it.err ? ' bad' : '') }, thumb, h('div', null, h('div', { class: 'name', title: it.file.name }, it.file.name), meta), acts));
    });
    var more = $('[data-more]', sec);
    more.hidden = st.items.length <= LIMIT;
    more.textContent = st.expandIn ? 'Ringkas daftar' : 'Tampilkan semua (' + st.items.length + ' file)';
    if (t.onItems) t.onItems(t, st, sec);
    refreshBar(id);
  }
  function moveItem(id, i, d) {
    var a = S[id].items, j = i + d; if (j < 0 || j >= a.length) return;
    var x = a[i]; a[i] = a[j]; a[j] = x; renderList(id);
  }
  function removeItem(id, it) {
    var st = S[id], i = st.items.indexOf(it); if (i < 0) return;
    st.items.splice(i, 1); if (it.url) URL.revokeObjectURL(it.url);
    renderList(id);
  }

  /* ---------- results ---------- */
  function goodResults(st) { return st.results.filter(function (r) { return r.blob; }); }
  function clearResults(id) {
    var st = S[id]; st.urls.forEach(function (u) { URL.revokeObjectURL(u); }); st.urls = []; st.results = [];
    $('[data-rfiles]', $('#p-' + id)).replaceChildren();
  }
  function setMode(id, mode, silent) {
    var st = S[id], sec = $('#p-' + id); st.mode = mode;
    $('[data-setup]', sec).hidden = mode !== 'setup';
    $('[data-result]', sec).hidden = mode !== 'result';
    refreshBar(id);
    if (!silent) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function pct(before, after) {
    var p = Math.round((1 - after / before) * 100);
    if (after === before) return h('span', { class: 'same' }, 'tidak berubah');
    return after <= before ? h('span', { class: 'mark' }, '−' + p + '%') : h('span', { class: 'up' }, '+' + (-p) + '%');
  }

  function refreshBar(id) {
    var t = byId[id], st = S[id], sec = $('#p-' + id); if (!sec) return;
    var bar = $('[data-bar]', sec), status = $('[data-status]', sec);
    bar.replaceChildren();
    if (st.mode === 'setup') {
      if (st.items.length) {
        var n = st.items.filter(function (i) { return !i.err; }).length, ready = !t.ready || t.ready(st);
        bar.append(h('button', { type: 'button', class: 'primary', disabled: st.busy || !n || !ready, onclick: function () { run(t); } },
          st.busy ? 'Memproses…' : !ready ? 'Menyiapkan pratinjau…' : t.run + (t.multi && n > 1 ? ' (' + n + ' file)' : '')));
      }
    } else {
      var good = goodResults(st);
      if (good.length === 1) bar.append(h('button', { type: 'button', class: 'primary', onclick: function () { saveBlob(good[0].blob, good[0].name); } }, 'Simpan file'));
      else if (good.length > 1) bar.append(h('button', { type: 'button', class: 'primary', onclick: function (e) { zipAndSave(st, e.currentTarget, good); } }, 'Simpan semua (.zip)'));
      bar.append(h('button', { type: 'button', class: 'ghost', onclick: function () { setMode(id, 'setup'); } }, 'Ubah pengaturan'),
        h('button', { type: 'button', class: 'ghost', onclick: function () { clearInputs(id); } }, 'Mulai baru'));
    }
    $('.runbar', sec).hidden = !bar.children.length && !status.textContent;
  }
  async function zipAndSave(st, btn, good) {
    var label = btn.textContent; btn.disabled = true; btn.textContent = 'Menyusun .zip…';
    try {
      await need('jszip');
      var zip = new JSZip(); good.forEach(function (r) { zip.file(r.name, r.blob); });
      var zb = await zip.generateAsync({ type: 'blob' });
      await saveBlob(zb, (st.zipName || 'hasil-kompak') + '.zip');
    } catch (e) { toast('Gagal membuat file .zip.'); }
    btn.disabled = false; btn.textContent = label;
  }

  function renderResults(id) {
    var st = S[id], sec = $('#p-' + id), ul = $('[data-rfiles]', sec);
    st.urls.forEach(function (u) { URL.revokeObjectURL(u); }); st.urls = []; ul.replaceChildren();
    if (!st.results.length) { setMode(id, 'setup', true); return; }
    var good = goodResults(st), sum = $('[data-sum]', sec); sum.replaceChildren();
    var withSize = good.filter(function (r) { return r.before; });
    if (withSize.length) {
      var b = withSize.reduce(function (s, r) { return s + r.before; }, 0), a = withSize.reduce(function (s, r) { return s + r.blob.size; }, 0);
      sum.append(h('div', { class: 'big' }, h('span', { class: 'was' }, fmt(b)), h('span', { class: 'arrow', 'aria-label': 'menjadi' }, '→'), h('span', null, fmt(a))), pct(b, a));
    } else {
      sum.append(h('div', { class: 'big' }, good.length === 1 && st.note ? st.note : good.length + ' file siap disimpan'));
    }
    var list = st.expandOut ? st.results : st.results.slice(0, LIMIT);
    list.forEach(function (r) {
      var isImage = r.blob && r.blob.type.indexOf('image/') === 0, thumb;
      if (isImage) {
        var u = URL.createObjectURL(r.blob); st.urls.push(u);
        thumb = h('button', { type: 'button', class: 'thumbbtn', 'aria-label': 'Lihat ' + r.name, onclick: function () { openViewer(r); } }, h('img', { class: 'thumb', src: u, alt: '' }));
      } else { thumb = h('div', { class: 'thumb' }, r.blob ? r.name.split('.').pop().toUpperCase() : '!'); }
      var meta;
      if (r.error) meta = h('div', { class: 'meta err' }, r.error);
      else if (r.before) meta = h('div', { class: 'meta' }, fmt(r.before) + ' → ' + fmt(r.blob.size), pct(r.before, r.blob.size), r.note ? h('span', null, r.note) : null);
      else meta = h('div', { class: 'meta' }, fmt(r.blob.size), r.note ? h('span', null, r.note) : null);
      ul.append(h('li', { class: 'row' + (r.error ? ' bad' : '') }, thumb, h('div', null, h('div', { class: 'name', title: r.name }, r.name), meta),
        h('div', { class: 'acts' },
          isImage ? iconBtn('Lihat ' + r.name, 'eye', function () { openViewer(r); }) : null,
          r.blob ? h('button', { type: 'button', class: 'ghost sm', onclick: function () { saveBlob(r.blob, r.name); } }, 'Simpan') : null,
          iconBtn('Buang ' + r.name + ' dari daftar', 'close', function () { removeResult(id, r); }))));
    });
    var more = $('[data-rmore]', sec);
    more.hidden = st.results.length <= LIMIT;
    more.textContent = st.expandOut ? 'Ringkas daftar' : 'Tampilkan semua (' + st.results.length + ' hasil)';
    refreshBar(id);
  }
  function removeResult(id, r) {
    var st = S[id], i = st.results.indexOf(r); if (i < 0) return;
    st.results.splice(i, 1); renderResults(id);
  }

  /* ---------- viewer (preview, and before/after for compressed photos) ---------- */
  var viewer = null;
  function openViewer(r) {
    if (!viewer) {
      viewer = h('dialog', { class: 'viewer', 'aria-label': 'Pratinjau hasil' });
      document.body.append(viewer);
      viewer.addEventListener('click', function (e) { if (e.target === viewer) viewer.close(); });
      viewer.addEventListener('close', function () { (viewer._u || []).forEach(function (u) { URL.revokeObjectURL(u); }); viewer._u = []; viewer.replaceChildren(); });
    }
    viewer._u = [];
    var after = URL.createObjectURL(r.blob); viewer._u.push(after);
    var body, cap;
    if (r.orig) {
      var before = URL.createObjectURL(r.orig); viewer._u.push(before);
      var range = h('input', { type: 'range', min: 0, max: 100, value: 50, 'aria-label': 'Geser untuk membandingkan foto asli dan hasil' });
      var cmp = h('div', { class: 'cmp' },
        h('img', { class: 'after', src: after, alt: 'Hasil kompres' }), h('img', { class: 'before', src: before, alt: 'Foto asli' }),
        h('span', { class: 'cl', 'aria-hidden': 'true' }), h('span', { class: 'tg l' }, 'Asli'), h('span', { class: 'tg r' }, 'Hasil'), range);
      range.addEventListener('input', function () { cmp.style.setProperty('--p', range.value + '%'); });
      var probe = new Image(); probe.onload = function () { cmp.style.setProperty('--r', probe.naturalWidth / probe.naturalHeight); }; probe.src = after;
      body = cmp; cap = 'Asli ' + fmt(r.before) + '. Hasil ' + fmt(r.blob.size) + '.';
    } else {
      body = h('img', { class: 'solo', src: after, alt: r.name }); cap = fmt(r.blob.size) + (r.note ? '. ' + r.note : '');
    }
    viewer.replaceChildren(h('div', { class: 'vbox' },
      h('div', { class: 'vbar' }, h('b', { class: 'vname' }, r.name), h('button', { type: 'button', class: 'ghost sm', onclick: function () { viewer.close(); } }, 'Tutup')),
      body, h('p', { class: 'hint' }, cap)));
    viewer.showModal();
  }

  async function run(t) {
    var st = S[t.id];
    if (st.busy) return;
    var items = st.items.filter(function (i) { return !i.err; });
    if (!items.length) { setStatus(t.id, 'Tidak ada file yang bisa diproses.', true); return; }
    st.busy = true; renderList(t.id); setStatus(t.id, 'Memproses…');
    try {
      await Promise.all((NEEDS[t.id] || []).map(need));
      var data = await t.go(items, getVals(t), function (m) { setStatus(t.id, m); });
      clearResults(t.id);
      uniqueNames(data.results);
      st.results = data.results; st.zipName = data.zipName || ''; st.note = data.note || ''; st.expandOut = false;
      renderResults(t.id);
      if (st.results.length) { setStatus(t.id, ''); setMode(t.id, 'result'); recentAdd(t.id); }
    } catch (e) {
      setStatus(t.id, (e && e.message) || 'Terjadi kesalahan saat memproses.', true);
    } finally { st.busy = false; renderList(t.id); }
  }

  /* ---------- sample files ---------- */
  async function sampleImages() {
    var pal = [['#ffd93b', '#1a1a1a', '#f2f2f2'], ['#2b6cb0', '#f6ad55', '#102a43'], ['#2f855a', '#faf089', '#0b2a1b']], files = [];
    for (var i = 0; i < 3; i++) {
      var c = document.createElement('canvas'); c.width = 2000; c.height = 1334;
      var x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 2000, 1334);
      g.addColorStop(0, pal[i][0]); g.addColorStop(1, pal[i][2]); x.fillStyle = g; x.fillRect(0, 0, 2000, 1334);
      for (var k = 0; k < 40; k++) {
        x.globalAlpha = 0.15 + Math.random() * 0.3; x.fillStyle = pal[i][1];
        x.beginPath(); x.arc(Math.random() * 2000, Math.random() * 1334, 30 + Math.random() * 180, 0, 7); x.fill();
      }
      x.globalAlpha = 1;
      for (var m = 0; m < 20000; m++) { x.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.12) + ')'; x.fillRect(Math.random() * 2000, Math.random() * 1334, 2, 2); }
      x.fillStyle = 'rgba(20,20,20,0.88)'; x.font = '800 120px ' + '"Archivo Variable", Archivo, system-ui, sans-serif'; x.fillText('Foto contoh ' + (i + 1), 90, 1190);
      files.push(new File([await canvasBlob(c, 'image/png')], 'foto-contoh-' + (i + 1) + '.png', { type: 'image/png' }));
    }
    return files;
  }
  async function samplePdf(name, pages, label) {
    await need('pdflib');
    var P = PDFLib, d = await P.PDFDocument.create(), fb = await d.embedFont(P.StandardFonts.HelveticaBold), fr = await d.embedFont(P.StandardFonts.Helvetica);
    var lines = ['Ini adalah contoh dokumen untuk mencoba Kompak.', 'Semua proses berjalan di browser Anda.', 'Tidak ada file yang dikirim ke server.'];
    for (var i = 1; i <= pages; i++) {
      var p = d.addPage([595.28, 841.89]);
      p.drawRectangle({ x: 0, y: 760, width: 595.28, height: 82, color: P.rgb(1, 0.85, 0.23) });
      p.drawText(label, { x: 40, y: 790, size: 26, font: fb, color: P.rgb(0.07, 0.07, 0.07) });
      p.drawText('Halaman ' + i + ' dari ' + pages, { x: 40, y: 700, size: 18, font: fb });
      lines.forEach(function (ln, j) { p.drawText(ln, { x: 40, y: 660 - j * 22, size: 13, font: fr }); });
    }
    return new File([await d.save()], name, { type: 'application/pdf' });
  }
  var SAMPLE = {
    img: sampleImages,
    pdf1: async function () { return [await samplePdf('contoh-dokumen.pdf', 5, 'Contoh dokumen')]; },
    pdf2: async function () { return [await samplePdf('laporan-a.pdf', 3, 'Laporan A'), await samplePdf('laporan-b.pdf', 2, 'Laporan B')]; }
  };

  /* ---------- hand-off between pages (home -> tool) ---------- */
  function idb() {
    return new Promise(function (res, rej) {
      var r = indexedDB.open('kompak', 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('handoff'); };
      r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
    });
  }
  async function handoffSave(tool, files) {
    var db = await idb();
    await new Promise(function (res, rej) {
      var tx = db.transaction('handoff', 'readwrite'); tx.objectStore('handoff').put({ tool: tool, files: files, t: Date.now() }, 'next');
      tx.oncomplete = res; tx.onerror = function () { rej(tx.error); };
    });
    db.close();
  }
  async function handoffTake(tool) {
    try {
      var db = await idb();
      var rec = await new Promise(function (res, rej) {
        var tx = db.transaction('handoff', 'readwrite'), os = tx.objectStore('handoff'), g = os.get('next');
        g.onsuccess = function () { os.delete('next'); res(g.result); }; tx.onerror = function () { rej(tx.error); };
      });
      db.close();
      return rec && rec.tool === tool && Date.now() - rec.t < 120000 ? rec.files : null;
    } catch (e) { return null; }
  }
  function toolHref(id) {
    if (SPA) return '#' + id;
    return ROOT + byId[id].slug + '/' + (location.protocol === 'file:' ? 'index.html' : '');
  }
  async function goTool(id, files) {
    if (SPA) { location.hash = id; showScreen(id); addFiles(byId[id], files); return; }
    try { await handoffSave(id, files); } catch (e) {}
    location.href = toolHref(id);
  }

  /* ---------- home ---------- */
  var IMG_PRI = ['compress', 'resize', 'crop', 'convert', 'img2pdf', 'wmimg', 'rotimg'];
  var PDF_PRI = ['merge', 'pdf2img', 'cpdf', 'split', 'organize', 'pdf2text', 'delpages', 'rotpdf', 'pagenum', 'watermark'];

  function homeFiles(files) {
    var box = $('#suggest'); if (!box) return;
    box.replaceChildren();
    var imgs = files.filter(isImg), pdfs = files.filter(isPdf), other = files.length - imgs.length - pdfs.length;
    if (!imgs.length && !pdfs.length) { box.append(h('p', { class: 'err' }, 'Format ini belum didukung. Pilih foto (JPG, PNG, WebP) atau file PDF.')); box.hidden = false; return; }
    if (imgs.length && pdfs.length) { box.append(h('p', { class: 'err' }, 'Pilih satu jenis saja, foto atau PDF. Keduanya belum bisa diproses sekaligus.')); box.hidden = false; return; }
    var isI = imgs.length > 0, list = isI ? imgs : pdfs, n = list.length;
    var ids = (isI ? IMG_PRI : PDF_PRI).filter(function (id) {
      var t = byId[id]; if (!t) return false;
      if (n > 1 && !t.multi) return false;
      if (id === 'merge' && n < 2) return false;
      return true;
    }).slice(0, 6);
    var total = list.reduce(function (s, f) { return s + f.size; }, 0);
    box.append(h('p', { class: 'sg-t' }, n + (isI ? ' foto' : ' file PDF') + ' dipilih (' + fmt(total) + '). Mau diapakan?'));
    var ul = h('ul');
    ids.forEach(function (id) { ul.append(h('li', null, h('button', { type: 'button', class: 'chipbtn', onclick: function () { goTool(id, list); } }, byId[id].name))); });
    box.append(ul);
    if (other) box.append(h('p', { class: 'hint' }, other + ' file dilewati karena formatnya tidak didukung.'));
    box.hidden = false;
  }

  function recentGet() { try { return JSON.parse(store('kompak-recent') || '[]').filter(function (id) { return byId[id]; }); } catch (e) { return []; } }
  function recentAdd(id) {
    var l = recentGet().filter(function (x) { return x !== id; }); l.unshift(id); store('kompak-recent', JSON.stringify(l.slice(0, 4)));
  }
  function renderRecent() {
    var box = $('#recent'); if (!box) return;
    var l = recentGet();
    box.replaceChildren(); box.hidden = !l.length; if (!l.length) return;
    box.append(h('span', null, 'Terakhir dipakai:'));
    l.forEach(function (id) { box.append(h('a', { href: toolHref(id) }, byId[id].name)); });
  }

  function initHome() {
    var home = $('#home'); if (!home) return;
    var drop = $('[data-hdrop]'), input = $('[data-hinput]');
    if (drop && input) {
      $('[data-hpick]').addEventListener('click', function () { input.click(); });
      input.addEventListener('change', function () { homeFiles([].slice.call(input.files)); input.value = ''; });
      ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
      ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
      drop.addEventListener('drop', function (e) { homeFiles([].slice.call(e.dataTransfer.files)); });
    }
    var q = $('#q');
    if (q) q.addEventListener('input', function () {
      var v = q.value.trim().toLowerCase(), any = false;
      $$('.grp').forEach(function (g) {
        var vis = 0;
        $$('.tool', g).forEach(function (c) { var ok = !v || c.getAttribute('data-s').indexOf(v) >= 0; c.parentNode.hidden = !ok; if (ok) vis++; });
        g.hidden = !vis; if (vis) any = true;
      });
      var nr = $('#nores'); if (nr) nr.hidden = any;
    });
    renderRecent();
  }

  /* ---------- theme ---------- */
  function effTheme() {
    var t = document.documentElement.getAttribute('data-theme'); if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paintTheme() {
    var dark = effTheme() === 'dark';
    $$('[data-theme-toggle]').forEach(function (b) {
      b.innerHTML = icon(dark ? 'sun' : 'moon', 20);
      var l = dark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'; b.setAttribute('aria-label', l); b.title = l;
    });
  }
  function initTheme() {
    paintTheme();
    $$('[data-theme-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = effTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next); store('kompak-theme', next); paintTheme();
      });
    });
  }

  /* ---------- paste ---------- */
  function currentToolId() { return SPA ? cur : document.body.getAttribute('data-tool'); }
  function onPaste(e) {
    var tg = e.target;
    if (tg && /^(INPUT|TEXTAREA)$/.test(tg.tagName) && tg.type !== 'file' && tg.type !== 'range' && tg.type !== 'radio') return;
    var files = [].slice.call((e.clipboardData && e.clipboardData.files) || []);
    if (!files.length) return;
    var id = currentToolId();
    if (id && byId[id]) { addFiles(byId[id], files); e.preventDefault(); }
    else if ($('#home') && !$('#home').hidden) { homeFiles(files); e.preventDefault(); }
  }

  /* ---------- single-file preview routing ---------- */
  function showScreen(id) {
    var t = byId[id]; if (!t) return;
    mount(id, $('#s-' + id + ' [data-mount]'));
    cur = id; $('#home').hidden = true;
    $$('.screen').forEach(function (s) { s.hidden = s.id !== 's-' + id; });
    window.scrollTo(0, 0);
  }
  function showHome() {
    cur = null; $('#home').hidden = false; $$('.screen').forEach(function (s) { s.hidden = true; }); window.scrollTo(0, 0);
  }
  function route() {
    var id = (location.hash || '').slice(1);
    if (byId[id]) { if (cur !== id) showScreen(id); } else if (cur || $$('.screen').some(function (s) { return !s.hidden; })) showHome();
  }

  /* ---------- offline ---------- */
  function initSW() {
    if (SPA || !('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(ROOT + 'sw.js').then(function () { return navigator.serviceWorker.ready; })
        .then(function () { var el = $('#offline'); if (el) el.hidden = false; }).catch(function () {});
    });
  }

  /* ---------- start ---------- */
  function init() {
    initTheme();
    if (location.protocol === 'file:' && !SPA) {
      $$('a[href]').forEach(function (a) { var hr = a.getAttribute('href'); if (/\/$/.test(hr) && !/^https?:/.test(hr)) a.setAttribute('href', hr + 'index.html'); });
    }
    if (SPA) { initHome(); window.addEventListener('hashchange', route); route(); }
    else {
      var id = document.body.getAttribute('data-tool');
      if (id && byId[id]) {
        mount(id, $('#tool'));
        handoffTake(id).then(function (files) { if (files && files.length) addFiles(byId[id], files); });
      } else initHome();
    }
    document.addEventListener('paste', onPaste);
    initSW();
    getDL();
  }
  init();
})();
