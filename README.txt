KOMPAK - situs kompres foto dan olah PDF
Develop ACP — Alfa Creative Project by Alfarobby

ISI FOLDER INI SUDAH LENGKAP. Tidak perlu internet untuk menjalankan alatnya,
semua pustaka dan huruf sudah ada di dalam folder (vendor/ dan fonts/).

1) ALAMAT SITUS (penting untuk SEO)
   Alamat yang tertulis sekarang di file adalah  https://jalfarobby-tech.github.io/Kompak
   Ganti dengan alamat asli situs Anda, tanpa garis miring di akhir:
     - GitHub Pages repo "kompak":   https://USERNAME.github.io/kompak
     - Domain sendiri:               https://nama-anda.my.id
   Cara mudah: kirim alamatnya ke Claude, nanti dibuatkan ulang. Atau di VS Code
   tekan Ctrl+Shift+H, cari alamat lama, ganti, lalu Replace All.
   File yang terpengaruh: semua index.html, sitemap.xml, robots.txt, 404.html.

2) UNGGAH KE GITHUB (tanpa Git)
   - Ekstrak zip ini. Pastikan index.html ada langsung di dalam folder hasil ekstrak.
   - Buat repo Public di github.com, klik "uploading an existing file".
   - Pilih SEMUA isi folder (bukan foldernya), seret ke GitHub. Tunggu selesai,
     lalu Commit.
   - Settings > Pages > Deploy from a branch > main > / (root) > Save.

3) MENCOBA DI KOMPUTER SENDIRI
   Klik dua kali index.html sudah cukup untuk melihat dan mencoba alat.
   Fitur offline dan tombol pasang aplikasi hanya aktif setelah situs online (https).

4) DAFTARKAN KE GOOGLE
   search.google.com/search-console > tambahkan situs > verifikasi > kirim sitemap.xml
   > URL Inspection > Request Indexing untuk beranda dan tiap halaman alat.
   Lakukan ini setelah alamat situs final, bukan sebelumnya.

5) CEK KECEPATAN
   Uji di pagespeed.web.dev setelah online.

LISENSI PUSTAKA PIHAK KETIGA ada di vendor/licenses/.
