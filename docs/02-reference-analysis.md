# Analisis referensi

Tanggal pemeriksaan source: 6 Oktober 2026.

## Bukti dan batas
HTML utama, bundle JavaScript dan CSS berhasil diakses. Alamat exhibition langsung menghasilkan HTTP 404, tetapi route dan komponen exhibition ada dalam bundle. Analisis berikut berasal dari source, BELUM dari pemeriksaan visual browser. Screenshot dan rekaman scroll diperlukan untuk mencocokkan komposisi, timing yang dirasakan, serta perubahan pada mobile.
Sumber:
- https://akiyamanico.github.io/porto/
- https://akiyamanico.github.io/porto/static/js/main.d186af50.js
- https://akiyamanico.github.io/porto/static/css/main.973c71ff.css
Hash nama bundle bisa berubah; URL tersebut adalah snapshot sumber pemeriksaan.

## Susunan Home
Header fixed -> spacer sekitar 64px -> Hero -> The Exhibition (CTA terpusat) -> The Journey (timeline) -> Footer.
Hero desktop dua kolom: kiri maksimum sekitar 55%, kanan sekitar 45%. Kiri: judul serif merah campuran bold/italic dan kartu Hire Me. Kanan: pengantar, label profesi, dua kartu statistik, daftar sertifikasi. Pada ukuran kecil layout menumpuk.
Journey: garis vertikal, titik merah, kartu pengalaman; proyek dalam kartu dapat dibuka/tutup.
Footer: latar gelap, identitas/pengantar, sosial/kontak, garis pemisah, copyright.

## Susunan Exhibition
Header bersama -> judul/back link -> tabs -> panel aktif -> footer bersama.
About: foto dengan hiasan sudut merah; bio; lokasi/fokus/status; statistik dan sertifikasi di kolom pendamping.
Tech Stacks: grid logo/nama tools dan kotak penjelasan. Grid source bergerak dari 2 kolom di kecil ke 4, lalu 6 kolom.
Projects: desktop detail kiri, daftar judul bernomor kanan, garis pemisah; sebelum memilih ada instruksi memilih proyek. Pada mobile ditumpuk. Klik judul mengganti detail; tab tetap pada route yang sama.
Adaptasi: About / Skills & Tools / Selected Works. Tambahkan thumbnail atau media karya pada panel detail sebagai adaptasi untuk video editor.

## Tokens dari CSS
| Token | Nilai |
|---|---|
| background | #F5F0EB |
| background alternate | #F9F5EE |
| accent | #C43A31 |
| text / footer | #1A1A1A |
| muted | #6B6B6B |
| border | #D9D0C5 |
| heading font | Playfair Display |
| body font | Manrope |
| logo font | Megrim |
| max content width | 1400px |
| padding horizontal | 24px / 48px / 64px |
| breakpoints source | 640px / 768px / 1024px |

Kartu umum: border beige tipis, latar putih transparan, sudut rounded. HireCard: gelap, border merah dashed, foto kecil, nama/profesi, link. Section divider: merah, sekitar 60px x 2px.

## Routing
Source menggunakan React Router dengan path /porto dan /porto/exhibition. HTTP 404 saat direct load konsisten dengan tidak adanya fallback hosting untuk route SPA. Ini inferensi penyebab, bukan hasil pemeriksaan konfigurasi repository.
Proyek kita memakai HashRouter agar deep link/refresh tidak meminta file /exhibition pada GitHub Pages.

## Bukti visual yang belum tersedia
- Home: atas/hero, CTA Exhibition, Journey, Footer.
- Exhibition: About, Skills, Projects sebelum dan setelah memilih item.
- Mobile: header/menu, hero, tabs, panel karya.
- Rekaman scroll turun/naik dan klik tab untuk mencocokkan animasi.
Letakkan bahan ini di docs/reference-assets bila pengguna memberikan. Catat setiap perubahan spesifikasi setelah verifikasi.
