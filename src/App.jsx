import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Exhibition from './pages/Exhibition.jsx'
import Home from './pages/Home.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  const { pathname } = useLocation()

  return (
    <div className="app-shell">
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Header key={pathname} />

      <div className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App