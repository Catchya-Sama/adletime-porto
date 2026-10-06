# Progress proyek

## Status awal
Dokumentasi disiapkan 6 Oktober 2026. Fondasi aplikasi/routing dan fondasi visual/shared layout selesai dibuat sampai tahap 2. Repository Git lokal menggunakan branch `main` dan terhubung ke repository public `https://github.com/Catchya-Sama/adletime-porto.git`; deployment belum dikonfigurasi.

| Tahap | Status | Catatan |
|---|---|---|
| 1 Fondasi aplikasi | DONE | React/Vite, HashRouter, route Home dan Exhibition, lint/build/dev/preview lulus |
| 2 Fondasi visual | DONE | Tokens, font, Header desktop/mobile, Footer, shared container, skip link, dan scroll-to-top selesai |
| 3 Home | TODO | |
| 4 Exhibition | TODO | |
| 5 Konten pribadi | TODO | Data final belum diberikan |
| 6 Responsif/aksesibilitas | TODO | |
| 7 Animasi | TODO | |
| 8 GitHub Pages | TODO | Remote GitHub aktif; deployment belum dikerjakan |

## Kekurangan informasi
Nama publik, email publik, foto, karya dan thumbnail, link video, bio, pengalaman, angka statistik dan penghargaan. Semua boleh menggunakan placeholder saat pengembangan. Screenshot/video referensi belum tersedia; halaman referensi membutuhkan JavaScript dan tidak dapat diverifikasi secara visual melalui akses web yang tersedia.

## Sesi berikutnya
Baca dokumen dan rencanakan tahap 3 (Home) dalam Plan Mode. Jangan mengerjakan Exhibition lengkap, motion, konten final, atau deployment sebelum tahapnya.

### Tahap 1 — Fondasi aplikasi
- Tanggal: 6 Oktober 2026
- Status: DONE
- Tujuan dan hasil: Aplikasi React/Vite berhasil dibuat tanpa menghapus dokumentasi. `HashRouter` menyediakan route `/` dan `/exhibition`, navigasi minimal tersedia, branch awal Git menggunakan `main`, dan route tidak dikenal diarahkan ke Home.
- File yang berubah: `.gitignore`, `.oxlintrc.json`, `README.md`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/pages/Home.jsx`, `src/pages/Exhibition.jsx`, dan `src/styles/global.css`. Dokumentasi persiapan ikut direkam karena ini commit pertama repository.
- Perintah pemeriksaan dan hasil: `npm install` berhasil tanpa vulnerability yang dilaporkan; `npm run lint` lulus dengan 0 warning dan 0 error; `npm run build` lulus dengan Vite 8.3.3; dev server dan production preview masing-masing mengembalikan HTTP 200 untuk `/` serta `/#/exhibition`; shell HTML memuat root React dan entry/aset yang sesuai.
- URL preview lokal: `http://localhost:5173/` saat menjalankan `npm run dev`; route Exhibition `http://localhost:5173/#/exhibition`.
- Pemeriksaan visual: belum dilakukan melalui browser interaktif. Respons server dan shell SPA sudah diverifikasi melalui HTTP, tetapi komposisi visual, klik navigasi, dan refresh manual tetap perlu diperiksa pengguna.
- Pemeriksaan keyboard/reduced motion (jika relevan): Navigasi menggunakan elemen tautan dan memiliki focus-visible dasar. Pemeriksaan keyboard browser dan reduced motion menyeluruh belum termasuk scope tahap 1.
- Masalah/keterbatasan: Data pribadi dan aset karya belum tersedia. Tampilan saat ini hanya fondasi minimal; belum merupakan layout final. Repository remote dan deployment belum ada.
- Commit implementasi: `41ea1b8` (`chore: initialize portfolio app and routing`).
- Keputusan/asumsi baru: Toolchain aktual adalah React 19.3.0, React Router DOM 7.18.4, Vite 8.3.3, dan Oxlint 1.87.0 sesuai lockfile. Motion belum dipasang. Folder `dist` dan `node_modules` tidak di-commit.
- Pekerjaan berikutnya: Rencanakan tahap 2 — tokens visual, font, Header statis desktop/mobile, Footer, dan shared layout.

### Tahap 2 — Fondasi visual dan shared layout
- Tanggal: 6 Oktober 2026
- Status: DONE
- Tujuan dan hasil: Design tokens warna, tipografi, spacing, radius, container, serta tinggi Header dipusatkan di `tokens.css`. Font Manrope, Megrim, dan Playfair Display dimuat melalui Google Fonts dengan fallback sistem. Shared layout kini memiliki Header fixed, navigasi desktop, tombol/menu mobile dengan atribut aksesibilitas, penutupan melalui Escape/navigasi, Footer reusable, skip link, active navigation state, dan scroll-to-top ketika pathname berubah. Home dan Exhibition tetap berupa konten tahap 1 agar scope tahap berikutnya tidak dikerjakan lebih awal.
- File yang berubah: `index.html`, `src/main.jsx`, `src/App.jsx`, `src/pages/Home.jsx`, `src/pages/Exhibition.jsx`, `src/components/Header.jsx`, `src/components/Footer.jsx`, `src/data/profile.js`, `src/styles/tokens.css`, `src/styles/global.css`, dan `src/styles/layout.css`.
- Perintah pemeriksaan dan hasil: `npm run lint` lulus dengan 0 warning dan 0 error; `npm run build` lulus dengan Vite 8.3.3; `git diff --check` lulus tanpa whitespace error. Dev server dan production preview masing-masing mengembalikan HTTP 200 untuk `/` dan `/#/exhibition`; shell memuat root React, Google Fonts, serta entry/aset build yang sesuai.
- URL preview lokal: `http://localhost:5173/` saat menjalankan `npm run dev`; route Exhibition `http://localhost:5173/#/exhibition`.
- Pemeriksaan visual: Dilakukan melalui screenshot Chrome headless pada desktop 1440×1000 dan breakpoint mobile 500×844 untuk Home serta Exhibition. Header, responsive navigation state awal, container, konten halaman, dan Footer tampil utuh tanpa overflow yang terlihat. Pemeriksaan awal menemukan deklarasi lebar container tidak valid dan sudah diperbaiki menggunakan `calc()`. Screenshot 390 px dari mode headless lama terpotong karena batas minimum viewport tooling, sehingga verifikasi mobile akhir memakai 500 px yang tetap berada di bawah breakpoint 768 px. Tampilan tidak diklaim pixel-perfect karena screenshot/rekaman referensi belum tersedia dan halaman referensi tidak dapat diverifikasi secara visual melalui akses web.
- Pemeriksaan keyboard/reduced motion (jika relevan): Struktur menggunakan tautan/button native, `aria-expanded`, `aria-controls`, label navigasi, focus-visible, skip link, dan handler Escape. Menu ditutup saat navigasi dan Header di-reset saat pathname berubah. Stylesheet menghormati `prefers-reduced-motion`; tahap ini belum menambahkan motion. Alur Tab, aktivasi tombol menu, Escape, dan fokus skip link masih perlu smoke test manual di browser interaktif.
- Masalah/keterbatasan: Nama, email, sosial, dan konten profil final belum tersedia sehingga `src/data/profile.js` memakai placeholder eksplisit dan tidak mengarang data. Google Fonts membutuhkan koneksi jaringan, tetapi fallback font tersedia. Interaksi browser tidak diautomasi karena project belum memiliki framework end-to-end. Repository public `origin` aktif, tetapi commit tahap 2 belum di-push karena push memerlukan persetujuan baru.
- Commit implementasi: `0a44341` (`feat: add portfolio design tokens and shared layout`).
- Keputusan/asumsi baru: Wordmark sementara menggunakan teks `ADLE`; nilai ini bukan pengganti nama publik final. Breakpoint navigasi mobile ditetapkan di bawah 768 px. `profile.socialLinks` tetap array kosong sampai tautan nyata diberikan. Header di-remount berdasarkan pathname untuk memastikan state menu tertutup setelah perubahan route tanpa effect sinkron yang memicu warning React.
- Pekerjaan berikutnya: Rencanakan tahap 3 — membangun konten dan section Home sesuai roadmap, menggunakan placeholder yang jelas bila data/aset final masih belum tersedia.

## Template catatan tahap — salin untuk setiap tahap
### Tahap N — [nama]
- Tanggal:
- Status:
- Tujuan dan hasil:
- File yang berubah:
- Perintah pemeriksaan dan hasil:
- URL preview lokal:
- Pemeriksaan visual: [dilakukan / belum dilakukan, ukuran layar, hasil]
- Pemeriksaan keyboard/reduced motion (jika relevan):
- Masalah/keterbatasan:
- Commit implementasi:
- Keputusan/asumsi baru:
- Pekerjaan berikutnya:

Hash commit dokumentasi terakhir cukup dilihat di git log. Tidak perlu menyunting catatan lagi untuk memasukkan hash commit yang memuat catatan itu sendiri.
