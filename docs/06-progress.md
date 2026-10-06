# Progress proyek

## Status awal
Dokumentasi disiapkan 6 Oktober 2026. Fondasi aplikasi/routing, fondasi visual/shared layout, halaman Home, dan halaman Exhibition selesai dibuat sampai tahap 4. Repository Git lokal menggunakan branch `main` dan terhubung ke repository public `https://github.com/Catchya-Sama/adletime-porto.git`; deployment belum dikonfigurasi.

| Tahap | Status | Catatan |
|---|---|---|
| 1 Fondasi aplikasi | DONE | React/Vite, HashRouter, route Home dan Exhibition, lint/build/dev/preview lulus |
| 2 Fondasi visual | DONE | Tokens, font, Header desktop/mobile, Footer, shared container, skip link, dan scroll-to-top selesai |
| 3 Home | DONE | Hero, HireCard, stats, CTA Exhibition, serta Journey accordion berbasis data dan responsif selesai |
| 4 Exhibition | DONE | About, Skills & Tools, Selected Works, tabs aksesibel, detail karya, empty state, serta layout desktop/mobile selesai |
| 5 Konten pribadi | TODO | Data final belum diberikan |
| 6 Responsif/aksesibilitas | TODO | |
| 7 Animasi | TODO | |
| 8 GitHub Pages | TODO | Remote GitHub aktif; deployment belum dikerjakan |

## Kekurangan informasi
Nama publik, email publik, foto, karya dan thumbnail, link video, bio, pengalaman, angka statistik dan penghargaan. Semua boleh menggunakan placeholder saat pengembangan. Screenshot/video referensi belum tersedia; halaman referensi membutuhkan JavaScript dan tidak dapat diverifikasi secara visual melalui akses web yang tersedia.

## Sesi berikutnya
Baca dokumen dan rencanakan tahap 5 (konten dan aset pribadi) dalam Plan Mode. Bila data belum tersedia, identifikasi field/aset yang diperlukan dan gunakan status `NEEDS_CONTENT`; jangan mengerjakan motion kompleks atau deployment sebelum tahapnya.

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

### Tahap 3 — Home
- Tanggal: 6 Oktober 2026
- Status: DONE
- Tujuan dan hasil: Home lengkap dibangun sebagai komposisi editorial dua kolom yang terdiri dari Hero, `HireCard` bergaya tiket, kartu statistik berbasis data, blok sertifikasi/pencapaian, CTA menuju Exhibition, serta Journey timeline dengan accordion. Konten yang belum terkonfirmasi memakai placeholder eksplisit; satu entri Journey demo diberi label jelas sebagai contoh dan bukan pengalaman pemilik.
- File yang berubah: `src/pages/Home.jsx`, `src/components/Hero.jsx`, `src/components/HireCard.jsx`, `src/components/StatsCards.jsx`, `src/components/ExhibitionCTA.jsx`, `src/components/Journey.jsx`, `src/data/profile.js`, `src/data/experience.js`, `src/styles/global.css`, dan `src/styles/home.css`.
- Perintah pemeriksaan dan hasil: `npm run lint` lulus dengan 0 warning dan 0 error; `npm run build` lulus dengan Vite 8.3.3; `git diff --check` dan `git diff --cached --check` lulus tanpa whitespace error. Dev server mengembalikan HTTP 200 untuk Home dan route Exhibition. Validasi Chrome DevTools Protocol memastikan lebar dokumen sama dengan lebar viewport pada desktop 1440 px dan mobile 500 px, sehingga tidak ditemukan horizontal overflow.
- URL preview lokal: `http://localhost:5173/` saat menjalankan `npm run dev`; CTA mengarah ke `http://localhost:5173/#/exhibition`.
- Pemeriksaan visual: Dilakukan melalui screenshot Chrome headless untuk Hero, Exhibition CTA, Journey tertutup, dan Journey terbuka pada desktop 1440×1000 serta mobile 500×844. Hierarki tipografi, kartu tiket, kartu statistik, section CTA, timeline, accordion, dan sambungan ke Footer tampil utuh pada kedua breakpoint. Tampilan mengikuti arah visual dokumentasi, tetapi tidak diklaim pixel-perfect karena screenshot/video referensi asli belum tersedia.
- Pemeriksaan keyboard/reduced motion (jika relevan): Accordion menggunakan elemen `button` native dengan `aria-expanded`, `aria-controls`, dan ID panel stabil dari `useId`. Panel hanya dirender ketika terbuka, sehingga kontrol di dalam panel tertutup tidak dapat menerima fokus. Pengujian programatis memastikan state berubah dari `aria-expanded="false"` ke `"true"`, detail muncul, dan CTA memindahkan hash route ke `#/exhibition`. Tidak ada motion baru pada tahap ini; aturan global `prefers-reduced-motion` tetap berlaku. Alur Tab penuh masih menjadi bagian audit menyeluruh tahap 6.
- Masalah/keterbatasan: Foto, nama publik, email, angka statistik, sertifikasi/penghargaan, dan riwayat pengalaman asli belum tersedia. Semua area terkait tetap berupa placeholder yang ditandai dan harus diganti atau disembunyikan pada tahap konten. Exhibition lengkap, animasi kompleks, deployment, dan push tidak termasuk scope tahap ini.
- Commit implementasi: `7de336c` (`feat: build portfolio home page`).
- Keputusan/asumsi baru: Copy perkenalan menjelaskan layanan secara umum tanpa menyatakan riwayat atau pencapaian pribadi. Statistik menggunakan nilai `null` dan ditampilkan sebagai “Belum diisi”. Journey disimpan di `src/data/experience.js`; entri sementara menjelaskan format data yang diperlukan dan tidak dianggap sebagai pengalaman nyata. Tidak ada dependency baru.
- Pekerjaan berikutnya: Rencanakan tahap 4 — membangun Exhibition dengan About, Skills & Tools, Selected Works, tabs aksesibel, detail karya, state kosong, dan placeholder media sesuai roadmap.

### Tahap 4 — Exhibition
- Tanggal: 6 Oktober 2026
- Status: DONE
- Tujuan dan hasil: Route Exhibition dikembangkan menjadi halaman profil dan galeri interaktif dengan hero/back link serta tiga panel About, Skills & Tools, dan Selected Works. Tabs menggunakan pola ARIA dan state lokal tanpa mengubah route. About menampilkan struktur profil, fakta, statistik, serta pencapaian dengan empty state yang jujur. Skills & Tools memiliki grid siap data dan empty state. Selected Works menampilkan daftar bernomor dan detail terpilih dalam komposisi dua kolom desktop serta susunan daftar-diikuti-detail pada mobile.
- File yang berubah: `src/pages/Exhibition.jsx`, `src/components/exhibition/AboutPanel.jsx`, `src/components/exhibition/SkillsPanel.jsx`, `src/components/exhibition/ProjectsPanel.jsx`, `src/data/projects.js`, `src/data/profile.js`, dan `src/styles/exhibition.css`.
- Perintah pemeriksaan dan hasil: Baseline dan pemeriksaan akhir `npm run lint` lulus dengan 0 warning dan 0 error; `npm run build` lulus dengan Vite 8.3.3; `git diff --check` lulus tanpa whitespace error. Validasi Chrome DevTools Protocol pada desktop 1440×1000 dan mobile 390×844 memastikan route `#/exhibition`, atribut/relasi ARIA tabs, pergantian panel, pemilihan proyek, perpindahan fokus mobile, route kembali ke `#/`, dan tidak adanya horizontal overflow pada dokumen.
- URL preview lokal: `http://localhost:5173/#/exhibition` saat menjalankan `npm run dev`; back link dan wordmark mengarah ke `http://localhost:5173/#/`.
- Pemeriksaan visual: Dilakukan melalui screenshot Chrome headless untuk ketiga tab, Selected Works sebelum/sesudah pemilihan, serta layout desktop dan mobile. Hero, tab aktif, placeholder profil, empty state tools, daftar karya, detail media, badge placeholder, dan sambungan ke Footer tampil utuh. Pada mobile, tabs tetap berada di dalam viewport melalui area scroll horizontal lokal, daftar muncul sebelum detail, dan detail terpilih berada tepat di bawah header setelah fokus dipindahkan.
- Pemeriksaan keyboard/reduced motion (jika relevan): Tabs memakai `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`, dan roving `tabIndex`. Pengujian programatis memastikan Arrow Right memindahkan fokus/panel dari About ke Skills & Tools dan End memindahkannya ke Selected Works; implementasi juga menangani Arrow Left dan Home. Item proyek adalah `button` native dengan `aria-pressed`. Pada mobile, memilih proyek memfokuskan detail tanpa smooth motion. Tidak ada animasi baru; aturan global `prefers-reduced-motion` tetap berlaku.
- Masalah/keterbatasan: Bio, lokasi, ketersediaan, fokus kerja, skill/software, statistik, sertifikasi, foto, karya, thumbnail/video, peran, tahun, dan tautan asli belum tersedia. Karena itu About dan Skills memakai empty state, sedangkan `src/data/projects.js` berisi satu demonstrasi yang secara eksplisit dilabeli “Contoh / placeholder” dan “Bukan karya pemilik”. Audit aksesibilitas dan responsif lintas seluruh breakpoint tetap menjadi scope tahap 6.
- Commit implementasi: `2319fa6` (`feat: build interactive exhibition page`).
- Keputusan/asumsi baru: Tidak ada dependency baru. State tab dan proyek tetap lokal; identitas proyek menggunakan ID stabil. Tab memakai activation otomatis saat tombol Arrow/Home/End ditekan. Project detail awal sengaja berupa instruksi sampai pengguna memilih item, agar interaksi terpilih terlihat jelas dan tidak mengesankan placeholder sebagai karya default pemilik.
- Pekerjaan berikutnya: Rencanakan tahap 5 — integrasikan konten dan aset pribadi yang diberikan pengguna. Jika data belum tersedia, buat inventaris kebutuhan dan tandai tahap `NEEDS_CONTENT`; jangan mengklaim portofolio siap publikasi.

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
