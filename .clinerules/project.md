# Aturan proyek portofolio

## Tujuan dan sumber kebenaran
- Buat portofolio pribadi untuk video editing, motion graphics, dan VFX.
- Baca docs/01-brief.md, docs/03-architecture.md, docs/05-roadmap.md, dan docs/06-progress.md pada awal tugas; baca dokumen referensi/motion saat relevan.
- Gunakan React + Vite + JavaScript, CSS biasa, React Router HashRouter, dan satu library Motion yang kompatibel untuk animasi. Catat paket/import yang dipilih; jangan memasang dua library animasi untuk kebutuhan yang sama.
- Pertahankan konsep Home + Exhibition. Sesuaikan konten dengan profesi pemilik; jangan menyalin identitas, pengalaman, atau karya milik referensi.
- Temuan source dan dugaan visual harus dibedakan. Screenshot/video pengguna menjadi acuan verifikasi visual jika tersedia.

## Cara bekerja
- Kerjakan hanya satu tahap yang diminta. Plan Mode menghasilkan rencana; Act Mode menjalankan tahap tersebut.
- Rencana memuat tujuan, file terdampak, langkah, pemeriksaan, dan batas scope.
- Jika informasi opsional belum ada, gunakan placeholder yang jelas dan lanjutkan pekerjaan yang tidak bergantung padanya. Jangan mengarang prestasi, klien, angka, atau link.
- Gunakan struktur yang sudah disepakati. Hindari backend, database, autentikasi, CMS, parallax, dan fitur lain di luar brief.
- Periksa kondisi folder dan `git status` sebelum mengubah file. Jangan menghapus atau menimpa perubahan pengguna, menjalankan reset --hard, force push, atau mengosongkan folder.
- Folder sudah berisi dokumentasi: jangan membuat scaffold dengan opsi yang menghapus isi. Jika perlu, scaffold di folder sementara dan salin file aplikasi yang dibutuhkan tanpa menimpa dokumentasi.
- Perubahan rutin dan reversibel dalam tahap dapat dilakukan tanpa meminta persetujuan berulang. Berhenti hanya jika keputusan yang benar-benar dibutuhkan belum tersedia atau tindakan berisiko mengubah pekerjaan lain.

## Implementasi
- Simpan konten di src/data; komponen membaca data itu.
- Warna, spacing, dan font dasar berada di src/styles/tokens.css.
- Komponen, nama file, dan import konsisten; path aset tidak memakai path absolut Windows atau `/porto` milik referensi.
- Gunakan tombol untuk aksi, tautan untuk navigasi, label yang jelas, fokus keyboard, alt gambar, tab yang aksesibel, dan accordion dengan aria-expanded.
- Dukung prefers-reduced-motion; efek dekoratif tidak boleh menghambat navigasi.
- Perubahan header tidak boleh mengubah tinggi konten hingga menyebabkan layout jump. Selalu sediakan cara membuka navigasi saat header ringkas.
- Thumbnail responsif, dimensinya stabil; video tidak dimuat semua sekaligus. Pakai poster/tautan atau embed yang dimuat saat diperlukan.
- Pada animasi acak, buat nilai stabil per kejadian; jangan menghasilkan random baru pada setiap render.
- Cleanup listener scroll, timer, dan efek ketika komponen unmount.

## Preview, Git, dan progress
- Jalankan pemeriksaan sesuai tahap. `npm run build` wajib setelah scaffold atau perubahan kode/dependency/config.
- Preview melalui npm run dev. Jika tidak dapat melihat browser, tulis 'belum diverifikasi secara visual', berikan URL lokal dan checklist pengguna; jangan mengklaim preview sudah diperiksa.
- Jika ditemukan masalah, perbaiki pada tahap yang sama dan ulangi pemeriksaan terkait.
- Sebelum commit, periksa diff dan stage hanya file milik tahap. Jangan commit node_modules, dist, secrets, atau perubahan pengguna yang tidak terkait.
- Commit implementasi lokal diizinkan dalam workflow ini. Jika Git identity belum diatur, laporkan dan minta nama/email; jangan mengarang identitas atau mengubah konfigurasi global.
- Setelah commit implementasi, tulis hasil dan hash-nya di docs/06-progress.md. Commit perubahan dokumentasi sekali; jangan membuat loop untuk mencatat hash commit dokumentasi sendiri.
- Push/publikasi hanya termasuk tahap 8 yang diminta pengguna, dengan repository dan username yang sudah terverifikasi. Jangan push pada tahap 1–7.
- Setelah satu tahap, laporkan apa yang berubah, pemeriksaan, batas verifikasi, hash commit, progress, dan tahap berikutnya. Tunggu instruksi untuk memulai tahap berikutnya.
