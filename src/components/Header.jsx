import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Exhibition', to: '/exhibition' },
]

function NavigationLinks({ onNavigate }) {
  return navigationItems.map(({ label, to, end }) => (
    <NavLink key={to} to={to} end={end} onClick={onNavigate}>
      {label}
    </NavLink>
  ))
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner container">
          <NavLink
            className="site-wordmark"
            to="/"
            aria-label="Buka halaman Home"
            onClick={() => setIsMenuOpen(false)}
          >
            ADLE
          </NavLink>

          <nav className="desktop-navigation" aria-label="Navigasi utama">
            <NavigationLinks />
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden="true">{isMenuOpen ? 'Tutup' : 'Menu'}</span>
          </button>
        </div>

        {isMenuOpen && (
          <nav id={menuId} className="mobile-navigation" aria-label="Navigasi mobile">
            <div className="mobile-navigation__inner container">
              <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
            </div>
          </nav>
        )}
      </header>
      <div className="header-spacer" aria-hidden="true" />
    </>
  )
}

export default Header