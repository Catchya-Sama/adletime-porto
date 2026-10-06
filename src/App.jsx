import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Exhibition from './pages/Exhibition.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="site-name" to="/" aria-label="Buka halaman Home">
          Portfolio
        </NavLink>

        <nav aria-label="Navigasi utama">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/exhibition">Exhibition</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App