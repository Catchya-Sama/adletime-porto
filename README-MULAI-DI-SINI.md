# Panduan memulai portofolio dengan Cline

Paket ini berisi dokumentasi dan aturan proyek, belum berisi website yang sudah dibuat.
Target: portofolio editing, motion graphics, dan VFX dengan referensi Akiyamanico; dikerjakan di VS Code + Cline; dipublikasikan ke GitHub Pages.

## Cara memasang
1. Buat folder proyek `portfolio` di Windows.
2. Ekstrak ZIP ini. Salin ISI folder `portfolio-cline-kit` ke dalam folder proyek, sehingga `docs`, `.clinerules`, dan README berada langsung di root proyek.
3. Buka folder proyek melalui VS Code > File > Open Folder.
4. Buka `docs/01-brief.md`; isi username GitHub dan data yang sudah tersedia. Placeholder boleh dipakai selama pengembangan, tetapi harus diselesaikan atau disembunyikan sebelum publikasi.
5. Pastikan aturan `.clinerules/project.md` aktif di panel Rules Cline.
6. Buka `PROMPTS-CLINE.md`, salin Prompt A ke Cline dalam Plan Mode.
7. Setelah rencana tahap 1 jelas, pindah ke Act Mode dan kirim Prompt B.
8. Periksa preview. Gunakan Prompt C bila ada revisi; Prompt D untuk tahap berikutnya.

## Alur setiap tahap
Plan -> Act untuk SATU tahap -> preview dan pemeriksaan -> commit perubahan tahap -> catat progress -> commit dokumentasi -> laporan -> berhenti pada batas tahap.

Commit dokumentasi mencatat hash commit implementasi. Hash commit dokumentasi dapat dilihat melalui `git log`; jangan membuat commit tambahan hanya untuk mencatat hash commit dokumentasi itu sendiri.

## Dokumen yang dibaca
- `docs/01-brief.md`: tujuan, konten, batas scope.
- `docs/02-reference-analysis.md`: temuan kode referensi dan hal yang perlu diverifikasi secara visual.
- `docs/03-architecture.md`: stack, komponen, data, dan routing.
- `docs/04-motion-spec.md`: perilaku animasi.
- `docs/05-roadmap.md`: tahap, batas, kriteria selesai, dan pesan commit.
- `docs/06-progress.md`: status aktual. Baca ini pada awal setiap sesi.
- `docs/07-validation-deployment.md`: pemeriksaan dan GitHub Pages.

## Kebutuhan lokal
VS Code, Cline, Git, Node.js LTS yang kompatibel dengan Vite yang dipilih, browser, dan akun GitHub.
Untuk React/Vite, preview utama menggunakan `npm run dev`, bukan membuka index.html langsung atau Live Server. Pemeriksaan hasil produksi: `npm run build`, lalu `npm run preview`.

## Referensi
https://akiyamanico.github.io/porto
https://akiyamanico.github.io/porto/exhibition

Screenshot dan video referensi belum tersedia dalam paket. Simpan jika tersedia di `docs/reference-assets/`. Jangan menganggap bentuk akhir sudah diverifikasi melalui browser hanya karena source telah dibaca.
