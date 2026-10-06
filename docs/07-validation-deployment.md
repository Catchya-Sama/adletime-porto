# Pemeriksaan dan publikasi

## Setiap perubahan aplikasi
- Jalankan npm run build. Jika gagal, perbaiki error yang berkaitan dengan tahap sebelum commit.
- Jalankan npm run dev untuk interaksi; jangan membuka file index.html langsung.
- Setelah perubahan config/base/deploy, periksa juga npm run preview untuk hasil build.
- Periksa console, link, gambar, state kosong, navigasi dan perilaku spesifik tahap.
- Bila browser tidak dapat dioperasikan oleh Cline, berikan checklist pengguna dan catat bahwa visual belum diverifikasi.

## Checklist akhir
- Home -> Exhibition -> Home bekerja.
- Refresh dan membuka tautan #/exhibition langsung bekerja.
- About/Skills/Selected Works berpindah benar; keyboard dan fokus berfungsi.
- Memilih karya menampilkan detail karya yang sesuai.
- Journey accordion dapat dibuka/tutup.
- Scroll turun/naik mengubah header tanpa flicker dan tanpa menghilangkan akses navigasi.
- Menu mobile, overlay dan tombol close bekerja.
- Tidak ada overflow pada 360/390/768/1024/1440px.
- Reduced motion mematikan efek besar/dekoratif; isi tetap terlihat.
- Foto, thumbnail, alt, link video/email/sosial benar; placeholder publik dihapus/disembunyikan.
- Build lulus; tidak ada error console yang terkait aplikasi.

## GitHub Pages untuk Vite
1. Verifikasi username dan repository tujuan bersama pengguna. Alamat utama menggunakan repository USERNAME.github.io.
2. Set base '/' untuk alamat utama; '/REPO/' untuk situs proyek.
3. Commit package-lock.json. Jangan commit node_modules, dist, credential, .env rahasia, atau file kerja video besar.
4. Workflow .github/workflows/deploy.yml memakai action resmi GitHub untuk checkout, setup Node kompatibel, npm ci, npm run build, configure Pages, upload dist, dan deploy Pages. Verifikasi versi/action dari dokumentasi resmi saat implementasi.
5. Permissions: contents read, pages write, id-token write; environment github-pages; jalankan pada push main dan workflow_dispatch; concurrency deploy dikontrol.
6. Di GitHub > Settings > Pages > Source, pilih GitHub Actions.
7. Push setelah tujuan benar dan tahap 8 diminta. Ikuti hasil workflow; jangan klaim sukses hanya karena push berhasil.
8. Periksa URL publik, aset, links, refresh, serta route hash Exhibition. Catat URL dan hasil di progress.

Jika Cline tidak memiliki akses GitHub: siapkan workflow dan commit lokal; arahkan pengguna push melalui VS Code/GitHub Desktop dan mengatur Pages. Tandai deployment belum terverifikasi.

## Sumber resmi untuk Cline
- https://vite.dev/guide/
- https://vite.dev/guide/static-deploy.html
- https://reactrouter.com/api/declarative-routers/HashRouter
- https://motion.dev/docs/react
- https://docs.github.com/en/pages
- https://docs.cline.bot/core-workflows/plan-and-act
- https://docs.cline.bot/customization/cline-rules
