# Roadmap — satu tahap per tugas

## Tahap 1 — Fondasi aplikasi
Tujuan: aplikasi berjalan tanpa mengubah arah desain dan tanpa menghapus dokumen.
Kerja: baca docs; catat asumsi; scaffold React/Vite; routing HashRouter / dan /exhibition; komponen halaman minimal dengan navigasi; .gitignore; Git init bila belum ada; README perintah dev/build.
Belum: hero lengkap, motion, deploy.
Selesai: npm run dev menampilkan halaman; kedua route dan refresh bekerja; npm run build lulus; docs tetap utuh.
Commit: chore: initialize portfolio app and routing

## Tahap 2 — Fondasi visual dan layout bersama
Kerja: tokens, fonts, global styles, Header statis desktop/mobile, Footer, container/spacer.
Belum: perubahan header karena scroll atau partikel.
Selesai: navigasi dapat diklik dan dioperasikan keyboard; menu mobile bekerja; fonts fallback; footer/kontak placeholder ditandai; build lulus.
Commit: feat: add portfolio design tokens and shared layout

## Tahap 3 — Home
Kerja: Hero dua kolom; HireCard; stats; ExhibitionCTA; Journey dan accordion; konten dari data; tampilan dasar mobile.
Belum: motion kompleks dan panel exhibition lengkap.
Selesai: susunan sesuai reference-analysis; accordion berfungsi; karya/angka tidak diarang; build lulus.
Commit: feat: build portfolio home page

## Tahap 4 — Exhibition
Kerja: judul/back link; About, Skills & Tools, Selected Works; tabs aksesibel; daftar dan detail karya; state kosong; placeholder media; layout desktop/mobile dasar.
Selesai: tab aktif jelas; keyboard tab berfungsi; memilih karya mengganti detail yang benar; media/link valid atau ditandai demo; build lulus.
Commit: feat: build exhibition tabs and project details

## Tahap 5 — Konten dan aset pribadi
Kerja: integrasikan data yang diberikan pengguna; foto, thumbnail, link; metadata/title/description/favicon. Jangan menyalin konten pemilik referensi.
Jika data belum ada: integrasikan yang tersedia, buat daftar field/aset yang masih diperlukan; status NEEDS_CONTENT untuk tahap ini. Jangan mengklaim tahap selesai atau siap publikasi. Pekerjaan independen tahap berikutnya boleh dilakukan bila pengguna memintanya.
Selesai: data publik disetujui/terkonfirmasi; placeholder dihapus atau bagian disembunyikan; aset sendiri/berizin; build lulus.
Commit: content: add portfolio profile and work assets

## Tahap 6 — Responsif dan aksesibilitas
Kerja: periksa lebar 360, 390, 768, 1024, 1440px; overflow; gambar; menu; tabs; accordion; project details; focus; kontras dan alt; keyboard.
Selesai: semua interaksi penting dapat diakses, konten tidak terpotong, tidak scroll horizontal, build lulus. Catat preview yang benar-benar diperiksa.
Commit: fix: refine responsive layout and accessibility

## Tahap 7 — Animasi dan QA gerakan
Kerja: docs/04-motion-spec.md; satu library Motion; header expanded/merging/compact; reveal; tab/detail; hover; optional particles; reduced motion.
Selesai: scroll turun/naik stabil, navigasi tetap tersedia, reduced motion bekerja, layout tidak melompat, console tidak error relevan, build lulus.
Commit: feat: add portfolio motion and scroll header

## Tahap 8 — Build dan GitHub Pages
Prasyarat: konten publik siap; username/repository benar; pengguna meminta tahap publikasi.
Kerja: pastikan base, GitHub Actions deploy.yml, lockfile, README; npm run build dan preview; push ke repository yang telah diverifikasi; Pages source GitHub Actions; pantau hasil.
Selesai: URL publik berhasil dimuat, aset/link/tab/refresh deep-link bekerja; bukti deployment dicatat. Bila akses GitHub tidak ada, berikan langkah manual dan status WAITING_DEPLOYMENT, jangan mengklaim sudah online.
Commit: ci: configure GitHub Pages deployment

## Prosedur penutupan setiap tahap
1. Periksa preview dan checks yang relevan; perbaiki masalah dalam scope.
2. Periksa git status/diff; stage file tahap saja.
3. Commit implementasi; catat hash pendek.
4. Update docs/06-progress.md: hasil, checks, keterbatasan, hash implementasi, next step.
5. Commit dokumentasi: docs: record stage N progress.
6. Laporkan hasil dan berhenti. Jangan otomatis mengerjakan tahap berikutnya.

Status yang dipakai: TODO, IN_PROGRESS, DONE, NEEDS_CONTENT, BLOCKED, WAITING_DEPLOYMENT. DONE mensyaratkan bukti pemeriksaan yang sesuai; jangan menyamakan kode tertulis dengan hasil visual terverifikasi.
