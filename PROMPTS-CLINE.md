# Prompt siap pakai untuk Cline

Prompt di bawah ditujukan untuk folder proyek yang sudah berisi paket dokumentasi ini.

## Prompt A — sesi pertama, Plan Mode
Saya ingin membangun website portofolio pribadi untuk video editing, motion graphics, dan VFX dengan VS Code dan Cline, lalu memublikasikannya ke GitHub Pages. Referensi saya https://akiyamanico.github.io/porto dan halaman exhibition-nya. Saya ingin mengikuti karakter layout, tipografi, kartu Hire Me, dua halaman Home/Exhibition, tab, timeline, serta animasi header/scroll yang dijelaskan dalam dokumen; gunakan identitas dan karya saya sendiri.

Baca README-MULAI-DI-SINI.md, .clinerules/project.md, dan semua docs/01 sampai docs/07. Periksa isi folder dan kondisi Git terlebih dahulu. Dokumentasi ini sudah ada dan tidak boleh hilang ketika membuat scaffold.

Sekarang rencanakan TAHAP 1 SAJA sesuai docs/05-roadmap.md. Gunakan React + Vite + JavaScript/JSX, CSS biasa, HashRouter dan nantinya satu library Motion. Jangan mengganti stack atau mengubah konsep menjadi satu halaman.

Dalam responsmu:
1. Ringkas pemahaman tujuan dan batas tahap 1.
2. Sebutkan file yang akan dibuat/diubah dan tanggung jawabnya.
3. Jelaskan setup yang menjaga dokumen yang sudah ada.
4. Sebutkan langkah implementasi dan cara memeriksa dev preview, route/refresh, serta build.
5. Sebutkan data yang belum ada; gunakan placeholder untuk hal opsional dan lanjutkan rencana tanpa mengarang data.
6. Sebutkan pesan commit implementasi dan cara mencatat progress setelahnya.

Tetap di Plan Mode. Jangan membuat file atau menjalankan implementasi sebelum saya pindah Act Mode.

## Prompt B — Act Mode untuk tahap yang sudah direncanakan
Jalankan rencana tahap 1 yang baru kita sepakati. Kerjakan tahap 1 saja. Ikuti dokumentasi dan .clinerules/project.md; jangan menimpa dokumen atau pekerjaan lain.

Setelah implementasi, jalankan pemeriksaan yang sesuai, npm run build, dan preview. Jika kamu dapat mengakses browser, periksa dua halaman dan refresh. Jika tidak, berikan URL preview dan checklist yang perlu saya periksa, lalu catat batas verifikasinya secara jujur.

Perbaiki masalah yang ditemukan pada tahap ini. Periksa diff, commit perubahan tahap secara lokal, lalu catat hasil dan hash implementasi di docs/06-progress.md serta commit dokumentasi sekali. Jika identitas Git belum ada, minta nama/email yang benar; jangan mengarang atau mengubah konfigurasi Git global.

Akhiri dengan hasil tahap, checks, batas verifikasi, commit, dan langkah berikutnya. Jangan push atau mengerjakan tahap 2 otomatis.

## Prompt C — revisi preview pada tahap yang sama
Baca docs/06-progress.md dan dokumen terkait. Ini revisi tahap yang sedang dikerjakan, bukan tahap baru.

Masalah yang saya lihat:
[ISI MASALAH SECARA SPESIFIK, misalnya judul terlalu besar di HP, menu tidak membuka, atau jarak hero berbeda dari screenshot. Sertakan screenshot jika ada.]

Telusuri penyebab, ubah file yang relevan saja, dan pertahankan bagian yang sudah sesuai. Periksa preview pada ukuran layar terkait serta build. Setelah berhasil, commit perbaikan, update progress, commit dokumentasi, dan laporkan hasil. Jangan lanjut tahap berikutnya otomatis.

## Prompt D — lanjut satu tahap, Plan Mode
Baca .clinerules/project.md, docs/01-brief.md, docs/03-architecture.md, docs/05-roadmap.md, dan docs/06-progress.md. Baca reference-analysis/motion-spec jika tahap membutuhkan.

Saya ingin merencanakan TAHAP [ISI NOMOR] SAJA. Periksa status aktual, perubahan belum di-commit, dan prasyarat tahap. Jangan mengulang setup atau merombak pekerjaan yang sudah selesai.

Berikan rencana dengan tujuan, scope, file yang berubah, langkah, kriteria selesai, preview/checks, risiko konkret bila ada, dan pesan commit. Catat kebutuhan data yang belum tersedia. Jangan implementasi di Plan Mode.

## Prompt E — eksekusi tahap berikutnya, Act Mode
Jalankan rencana tahap [ISI NOMOR] yang kita sepakati. Kerjakan satu tahap ini saja dan ikuti aturan proyek.

Urutannya: implementasi -> pemeriksaan/preview -> perbaikan -> commit implementasi lokal -> update docs/06-progress.md dengan hasil/checks/hash -> commit dokumentasi -> laporan. Jangan mengklaim visual/hosting sudah diperiksa bila belum. Jangan push sebelum tahap 8. Berhenti setelah laporan tahap.

## Prompt F — memulai sesi baru setelah jeda
Baca .clinerules/project.md dan docs/06-progress.md terlebih dahulu, lalu dokumen yang dibutuhkan. Periksa git status dan commit terakhir agar kamu mengetahui kondisi sebenarnya.

Ringkas apa yang sudah selesai, apa yang belum, serta keterbatasan yang masih ada. Saya ingin mengerjakan tahap [ISI NOMOR]. Rencanakan tahap ini saja dalam Plan Mode; jangan mengulang tahap selesai atau mengarang progress yang tidak tercatat.

## Prompt G — tahap publikasi, Plan Mode
Saya ingin memublikasikan website ini ke GitHub Pages sebagai tahap 8.
Username GitHub: [ISI USERNAME]
Repository tujuan: [ISI NAMA REPOSITORY]
Alamat repository: [ISI URL REPOSITORY]

Baca docs/07-validation-deployment.md dan progress. Periksa apakah konten final siap publik, build berhasil, routing HashRouter dan base sesuai repository. Rencanakan workflow GitHub Actions, pemeriksaan hasil build, push, pengaturan Pages, dan verifikasi URL publik. Jangan menyalin base /porto dari referensi.

Jika kamu tidak memiliki akses GitHub, jelaskan langkah yang saya perlu lakukan setelah workflow/commit lokal siap. Jangan meminta credential dimasukkan ke source atau chat. Tetap di Plan Mode sampai saya beralih Act Mode.

## Prompt H — publikasi, Act Mode
Kerjakan tahap 8 sesuai rencana untuk repository yang saya tentukan. Siapkan dan periksa workflow, build dan preview. Commit perubahan yang relevan. Push dan deploy termasuk dalam instruksi ini jika akses GitHub tersedia dan tujuan benar; jangan force push atau menimpa pekerjaan lain.

Periksa hasil deployment dan alamat publik termasuk aset dan refresh #/exhibition. Jika kamu tidak bisa melakukan push/deploy/akses browser, selesaikan bagian lokal yang tersedia, berikan langkah manual dan catat bagian yang belum terverifikasi. Catat hasil serta hash commit di progress dan laporkan URL hanya jika benar-benar diketahui.
