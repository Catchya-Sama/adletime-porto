import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page container" id="main-content" tabIndex="-1">
      <p className="eyebrow">Fondasi portofolio</p>
      <h1>Video Editor &amp; Motion Graphic Designer</h1>
      <p className="page-intro">
        Halaman Home sudah aktif. Konten profil dan layout lengkap akan dibangun
        pada tahap berikutnya menggunakan data yang telah dikonfirmasi.
      </p>
      <Link className="primary-link" to="/exhibition">
        Buka Exhibition
      </Link>
    </main>
  )
}

export default Home