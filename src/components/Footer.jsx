import { Link } from 'react-router-dom'
import profile from '../data/profile.js'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__intro">
          <p className="footer-label">Let&apos;s create something meaningful.</p>
          <h2>{profile.publicName}</h2>
          <p>{profile.shortIntro}</p>
        </div>

        <div className="site-footer__columns">
          <nav className="footer-navigation" aria-label="Navigasi footer">
            <p className="footer-heading">Jelajahi</p>
            <Link to="/">Home</Link>
            <Link to="/exhibition">Exhibition</Link>
          </nav>

          <div className="footer-contact">
            <p className="footer-heading">Kontak</p>
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            ) : (
              <p className="placeholder-text">Email publik belum diisi</p>
            )}
            <p>{profile.profession}</p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} Portfolio ADLE</p>
          <p className="placeholder-text">Identitas dan tautan final menunggu konfirmasi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer