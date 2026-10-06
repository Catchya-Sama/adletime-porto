# Checklist konten dan aset pribadi

Tahap 5 berstatus `NEEDS_CONTENT` sampai data publik dan aset final diberikan serta dikonfirmasi pemilik. Preview saat ini sengaja mempertahankan placeholder yang jelas; placeholder bukan konten final dan situs belum siap dipublikasikan.

## Cara melihat preview

Jalankan dari root proyek:

```powershell
npm run dev
```

Buka:

- Home: `http://localhost:5173/`
- Exhibition: `http://localhost:5173/#/exhibition`

Area yang perlu diperiksa sebelum memilih aset:

- Kartu kontak dan slot foto persegi di Home.
- Tab About dan slot foto rasio 4:5 di Exhibition.
- Tab Selected Works untuk preview thumbnail, metadata, dan tautan karya.
- Area Dokumen publik di bagian ringkasan About.

## Data profil yang dibutuhkan

Isi nilai yang sudah dikonfirmasi di `src/data/profile.js`:

| Field | Kebutuhan |
|---|---|
| `publicName` | Nama yang boleh tampil secara publik |
| `profession` | Jabatan/profesi publik |
| `heroIntro`, `shortIntro`, `bio` | Perkenalan singkat dan bio |
| `location`, `availability` | Opsional; jangan isi alamat lengkap |
| `focusAreas`, `tools` | Fokus pekerjaan dan software yang benar-benar digunakan |
| `email`, `socialLinks` | Kontak dan tautan publik |
| `stats`, `certifications` | Hanya angka dan pencapaian yang dapat dikonfirmasi |

## Foto profil

1. Simpan file di `src/assets/images/`, misalnya `profile-adle.webp`.
2. Tambahkan import pada bagian atas `src/data/profile.js`:

```js
import profilePortrait from '../assets/images/profile-adle.webp'
```

3. Isi data portrait:

```js
portrait: {
  src: profilePortrait,
  alt: 'Deskripsi singkat foto profil',
},
```

Jika `src` atau `alt` belum tersedia, aplikasi tetap menampilkan placeholder dan tidak memuat gambar rusak.

## Dokumen publik

1. Pastikan dokumen sudah dibersihkan dari informasi sensitif.
2. Simpan di `public/documents/`, misalnya `cv-adle.pdf`.
3. Tambahkan ke `profile.documents`:

```js
documents: [
  {
    id: 'cv',
    label: 'Lihat CV',
    url: `${import.meta.env.BASE_URL}documents/cv-adle.pdf`,
  },
],
```

Tautan hanya muncul setelah array berisi data. `BASE_URL` dipakai agar path tetap benar saat aplikasi nantinya berada di subfolder GitHub Pages.

## Karya dan thumbnail

1. Simpan thumbnail di `src/assets/images/`.
2. Import thumbnail pada bagian atas `src/data/projects.js`.
3. Tambahkan satu objek per karya dengan ID unik dan stabil.

```js
import projectThumbnail from '../assets/images/project-motion-01.webp'

const projects = [
  {
    id: 'project-motion-01',
    title: 'Judul karya',
    category: 'Motion Graphics',
    year: '2026',
    role: 'Peran pada proyek',
    description: 'Konteks dan kontribusi yang telah dikonfirmasi.',
    thumbnail: projectThumbnail,
    alt: 'Deskripsi visual thumbnail karya',
    videoUrl: 'https://tautan-video-yang-valid.example',
    projectUrl: null,
    tools: ['Nama software'],
    isPlaceholder: false,
  },
]
```

Hapus proyek demonstrasi hanya setelah minimal satu karya asli siap. Jangan menuliskan klien, peran, hasil, atau software yang belum dikonfirmasi.

## Pengalaman

Ganti placeholder di `src/data/experience.js` dengan periode, posisi, organisasi, ringkasan, dan detail yang akurat. Pendidikan atau tonggak kreatif dapat digunakan jika riwayat kerja belum ingin dipublikasikan.

## Checklist sebelum status DONE

- Nama dan semua teks publik disetujui pemilik.
- Foto dan thumbnail adalah milik sendiri atau memiliki izin penggunaan.
- Setiap gambar memiliki alt text yang bermakna.
- Dokumen bebas informasi sensitif dan memang boleh diunduh publik.
- Semua tautan terbuka ke tujuan yang benar.
- Placeholder dihapus atau bagian yang belum siap disembunyikan.
- `npm run lint` dan `npm run build` lulus.
- Preview desktop dan mobile diperiksa kembali.