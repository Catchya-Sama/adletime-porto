import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import useScrollDirection from '../hooks/useScrollDirection.js'

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
  const { headerState: scrollHeaderState } = useScrollDirection()
  const shouldReduceMotion = useReducedMotion()
  const headerState =
    shouldReduceMotion && scrollHeaderState === 'merging'
      ? 'compact'
      : isMenuOpen && scrollHeaderState !== 'expanded'
        ? 'compact'
        : scrollHeaderState

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 48rem)')
    const closeAtDesktop = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    desktopQuery.addEventListener('change', closeAtDesktop)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      desktopQuery.removeEventListener('change', closeAtDesktop)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className={`site-header site-header--${headerState}`} data-header-state={headerState}>
        <div className="site-header__inner container">
          <motion.div
            className="site-wordmark-wrap"
            animate={headerState === 'compact' ? { left: '50%', x: '-50%' } : { left: '0%', x: '0%' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <NavLink
              className="site-wordmark"
              to="/"
              aria-label="Buka halaman Home"
              onClick={() => setIsMenuOpen(false)}
            >
              ADLE
            </NavLink>
          </motion.div>

          <motion.nav
            className="desktop-navigation"
            aria-label="Navigasi utama"
            animate={headerState === 'expanded' ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
            aria-hidden={headerState !== 'expanded'}
          >
            <NavigationLinks />
          </motion.nav>

          <button
            className={`menu-toggle${headerState !== 'expanded' ? ' menu-toggle--compact' : ''}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden="true">{isMenuOpen ? 'Tutup' : 'Menu'}</span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.nav
              id={menuId}
              className="mobile-navigation"
              aria-label="Navigasi mobile"
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
            >
              <div className="mobile-navigation__inner container">
                <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <div className="header-spacer" aria-hidden="true" />
    </>
  )
}

export default Header