# Portfolio ADLE

Website portofolio responsif untuk video editing, motion graphics, dan visual effects. Proyek ini memiliki halaman Home dan Exhibition, navigasi aksesibel, sistem motion yang menghormati reduced motion, serta struktur data yang siap menerima konten pribadi final.

> Status publikasi: implementasi aplikasi selesai sampai Tahap 7, tetapi konten pribadi final dan deployment GitHub Pages belum selesai. Placeholder yang terlihat bukan data atau karya final pemilik.

## Stack

- React 19 dan JavaScript/JSX
- Vite 8
- React Router dengan `HashRouter`
- Motion for React melalui `motion/react`
- CSS biasa dengan design tokens
- Oxlint

## Fitur yang tersedia

- Home dengan hero, HireCard, statistik, CTA Exhibition, dan Journey accordion.
- Exhibition dengan panel About, Skills & Tools, dan Selected Works.
- Tabs yang dapat dioperasikan dengan keyboard dan detail proyek yang mengelola fokus di mobile.
- Header responsif dengan state `expanded`, `merging`, dan `compact` berdasarkan arah scroll.
- Viewport reveal, text reveal, stagger, transisi panel, dan micro-interaction ringan.
- Dukungan `prefers-reduced-motion`, termasuk perubahan preferensi saat runtime.
- Layout responsif yang telah diuji dari reflow 320 px sampai desktop 1440 px.
- Skip link, focus-visible, ARIA untuk menu/tabs/accordion, dan placeholder yang diberi label jelas.

## Progress

| Tahap | Status | Ringkasan |
|---|---|---|
| 1 — Fondasi aplikasi | DONE | React/Vite, routing, lint, build, dan preview |
| 2 — Fondasi visual | DONE | Tokens, Header, Footer, container, dan fondasi aksesibilitas |
| 3 — Home | DONE | Hero, HireCard, statistik, CTA, dan Journey |
| 4 — Exhibition | DONE | About, Skills & Tools, Selected Works, tabs, dan detail karya |
| 5 — Konten pribadi | NEEDS_CONTENT | Slot dan panduan aset tersedia; data/aset final belum diberikan |
| 6 — Responsif & aksesibilitas | DONE | Audit breakpoint, reflow, keyboard, fokus, kontras, dan console |
| 7 — Animasi | DONE | Motion, header berbasis scroll, reduced motion, dan QA gerakan |
| 8 — GitHub Pages | TODO | Deployment belum dikonfigurasi |

Status dan catatan pemeriksaan lengkap berada di [`docs/06-progress.md`](docs/06-progress.md). Panduan konten dan aset berada di [`docs/08-content-assets.md`](docs/08-content-assets.md).

## Kebutuhan lokal

- Node.js yang kompatibel dengan versi Vite pada `package.json`
- npm

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite. Route yang tersedia:

- Home: `#/`
- Exhibition: `#/exhibition`

## Pemeriksaan

```bash
npm run lint
npm run build
npm run preview
```

Folder `dist/` adalah hasil build dan tidak dimasukkan ke Git.

## Konten yang masih diperlukan

Sebelum situs siap dipublikasikan, proyek masih membutuhkan nama publik, email, foto, bio, pengalaman, lokasi/ketersediaan, software, statistik, sertifikasi, dokumen publik, karya, thumbnail, video, serta tautan sosial yang telah dikonfirmasi.

Jangan menganggap proyek demonstrasi dan placeholder sebagai karya atau identitas pemilik. Deployment juga belum dilakukan.

## Dokumentasi

- [`README-MULAI-DI-SINI.md`](README-MULAI-DI-SINI.md): alur kerja proyek.
- [`docs/01-brief.md`](docs/01-brief.md): tujuan dan batas scope.
- [`docs/03-architecture.md`](docs/03-architecture.md): arsitektur aplikasi.
- [`docs/04-motion-spec.md`](docs/04-motion-spec.md): spesifikasi gerakan.
- [`docs/05-roadmap.md`](docs/05-roadmap.md): roadmap tahap implementasi.
- [`docs/06-progress.md`](docs/06-progress.md): status dan hasil QA aktual.
- [`docs/07-validation-deployment.md`](docs/07-validation-deployment.md): validasi dan rencana deployment.