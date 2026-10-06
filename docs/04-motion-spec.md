# Spesifikasi animasi

Angka berikut ditemukan pada source; rasa visual belum dicocokkan melalui rekaman layar.

| Elemen | Pemicu | Gerak/timing |
|---|---|---|
| Header | Scroll turun, scrollY > 50px | Expanded -> merging -> compact; logo ke tengah, nav fade/scale/blur keluar |
| Header transition | Merging | Garis berputar dan partikel; sekitar 0.5s |
| Header | Scroll naik | Kembali expanded, tidak perlu kembali sampai paling atas |
| Hero utama | Mount | x -60 ke 0; opacity 0 ke 1; 0.8s ease-out |
| Hero teks lanjutan | Mount | y 40 ke 0; 0.8s; delay 0.3s |
| HireCard | Mount | y 30 ke 0; 0.7s; delay 0.6s |
| Hero kanan | Mount | x 40 ke 0; 0.7s; delay 0.5s |
| Statistik hero | Mount | y 20 ke 0; 0.5s; delay 0.7/0.8s |
| CTA/Journey/footer | In viewport | y 30 ke 0 + fade; 0.6s; once |
| Item Journey | In viewport | x -30 ke 0 + fade; 0.5s; stagger 0.15s |
| Panel tab | Tab berubah | y 20 ke 0 + fade; 0.5s |
| Grid tools | Panel aktif | y 20 ke 0; 0.4s; stagger 0.06s |
| TextReveal | Mount panel/detail | clip-path inset(0 100% 0 0) -> inset(0 0% 0 0); 0.7s; easing [0.77, 0, 0.175, 1] |
| Garis TextReveal | Bersama mask | Garis merah 2px melintas kiri -> kanan dan fade |
| Gallery card | Hover | y -4px, border accent, shadow; sekitar 0.4s |
| Foto About | Hover | scale 1.02; 0.4s |
| CTA arrow | Hover | x +4px |
| Link | Hover | Underline melebar dari kiri |
| Klik interaktif | Click, opsional | Pixel kecil, 0.5–0.8s; overlay pointer-events none |

## Adaptasi wajib untuk kegunaan
- Saat header compact, tetap ada akses menu/tautan Exhibition; jangan meniru hilangnya semua akses navigasi.
- Pertahankan ruang header supaya konten tidak bergeser.
- Tambahkan toleransi arah scroll kecil untuk mencegah flicker; nilai dicatat saat QA, bukan diklaim berasal dari source.
- Reduced motion: nonaktifkan partikel, perpindahan besar, mask, dan smooth scrolling; konten langsung terlihat atau fade singkat.
- Jangan menambahkan scroll-jacking, parallax, animasi 3D, cursor custom, atau video autoplay tanpa instruksi baru.
- Pastikan saat elemen animasi dibongkar, timer/listener dibersihkan.
- Efek dekoratif dikerjakan terakhir dan boleh ditunda bila mengganggu performa.

## Urutan implementasi tahap 7
Reveal bersama -> hero -> header -> tab/detail text reveal -> hover -> partikel opsional -> reduced motion -> QA scroll turun/naik dan mobile.
