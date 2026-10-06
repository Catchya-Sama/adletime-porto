import { Link } from 'react-router-dom'

function Exhibition() {
  return (
    <main className="page" id="main-content">
      <p className="eyebrow">Exhibition</p>
      <h1>Selected Works</h1>
      <p className="page-intro">
        Route Exhibition sudah aktif. Tab About, Skills &amp; Tools, dan Selected
        Works akan ditambahkan pada tahap khusus Exhibition.
      </p>
      <Link className="primary-link" to="/">
        Kembali ke Home
      </Link>
    </main>
  )
}

export default Exhibition