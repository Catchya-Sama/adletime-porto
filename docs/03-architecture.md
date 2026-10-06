# Arsitektur proyek

## Stack yang disepakati
React + Vite + JavaScript/JSX, CSS biasa, React Router HashRouter, satu library Motion untuk React. Cline memverifikasi API/import dan kompatibilitas paket dari dokumentasi resmi saat pemasangan; catat versi aktual di package.json dan lockfile. Gunakan satu package manager: npm.
Tidak memakai Tailwind pada versi awal supaya tokens/style mudah ditelusuri pemilik. Referensi menggunakan utility CSS, tetapi tampilan dapat direkonstruksi dengan CSS biasa.

## Path dan tanggung jawab
| Path | Fungsi |
|---|---|
| index.html | Entry Vite dan metadata awal |
| src/main.jsx | Mount React dan router |
| src/App.jsx | Routes / dan /exhibition |
| src/pages/Home.jsx | Susunan Home |
| src/pages/Exhibition.jsx | State tab dan susunan Exhibition |
| src/components/Header.jsx | Header desktop/mobile, expanded/merging/compact |
| src/components/Footer.jsx | Kontak bersama |
| src/components/Hero.jsx | Hero dua kolom |
| src/components/HireCard.jsx | Kartu tiket kontak |
| src/components/StatsCards.jsx | Statistik dari data |
| src/components/ExhibitionCTA.jsx | Tautan halaman karya |
| src/components/Journey.jsx | Timeline dan accordion |
| src/components/exhibition/AboutPanel.jsx | Profil/pencapaian |
| src/components/exhibition/SkillsPanel.jsx | Skills/tools |
| src/components/exhibition/ProjectsPanel.jsx | State karya terpilih, daftar dan detail |
| src/components/motion/Reveal.jsx | Reveal viewport bersama |
| src/components/motion/TextReveal.jsx | Mask reveal teks |
| src/components/motion/ClickParticles.jsx | Dekorasi opsional, setelah motion utama |
| src/hooks/useScrollDirection.js | Arah scroll dan threshold |
| src/data/profile.js | Nama, bio, kontak, statistik, tools |
| src/data/projects.js | Array karya |
| src/data/experience.js | Array perjalanan |
| src/styles/tokens.css | Tokens visual |
| src/styles/global.css | Reset ringan, type, buttons, focus |
| src/styles/home.css | Home |
| src/styles/exhibition.css | Exhibition |
| src/styles/motion.css | Efek dan reduced motion |
| src/assets/images/ | Foto/thumbnail yang diimport aplikasi |
| src/assets/icons/ | Ikon |
| public/ | Aset statis dengan nama tetap, favicon |
| docs/ | Rencana, referensi, progress, pemeriksaan |
| .clinerules/project.md | Aturan Cline |
| .github/workflows/deploy.yml | Build/deploy tahap 8 |
| vite.config.js | base dan config Vite |
| package.json / package-lock.json | Script dan dependency |
| .gitignore | node_modules, dist, env/secrets, file lokal |

Buat file saat tahapnya memerlukan, bukan semua komponen kosong sekaligus.

## Routing dan deploy
Routes internal / dan /exhibition melalui HashRouter. Contoh alamat utama https://USERNAME.github.io/#/exhibition.
Repository USERNAME.github.io -> Vite base '/'. Repository portfolio -> base '/portfolio/' dan alamat https://USERNAME.github.io/portfolio/#/exhibition.
Jangan hardcode /porto. Import aset src atau gunakan mekanisme BASE_URL untuk aset public yang perlu prefix. Navigasi antarhalaman memakai Link router; mailto dan tautan eksternal memakai a.
Saat pindah halaman, atur scroll ke atas. Pergantian tab tidak perlu mengubah route.

## State dan data
Header: expanded / merging / compact, menu mobile state tersendiri.
Exhibition: activeTab.
ProjectsPanel: selectedProjectId; pakai id stabil, bukan posisi array sebagai identitas.
Journey: expanded item per id.
Tidak perlu global state library.
Pada mobile, pemilihan karya harus membuat detail mudah ditemukan; bila perlu scroll detail ke posisi yang terlihat dan hormati reduced motion.

## Setup tanpa menimpa dokumen
Periksa folder sebelum scaffolding. Dokumentasi sudah ada. Bila create-vite menolak folder non-kosong, scaffold ke folder sementara, lalu pindahkan hanya file aplikasi/config. Jangan pilih opsi remove existing files. Verifikasi versi Node yang diperlukan oleh Vite dari dokumentasi resmi, bukan angka tebakan.
