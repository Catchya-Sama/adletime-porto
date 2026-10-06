import { Link } from 'react-router-dom'
import Reveal from './motion/Reveal.jsx'

function ExhibitionCTA() {
  return (
    <Reveal as="section" className="exhibition-cta" aria-labelledby="exhibition-cta-title">
      <div className="exhibition-cta__inner container">
        <span className="section-divider" aria-hidden="true" />
        <p className="section-kicker">Selected creative work</p>
        <h2 id="exhibition-cta-title">The Exhibition</h2>
        <p>
          Ruang untuk menampilkan pilihan karya editing, motion graphics, dan efek
          visual beserta proses di baliknya.
        </p>
        <Link className="circle-link motion-link" to="/exhibition">
          <span>Lihat karya</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </Reveal>
  )
}

export default ExhibitionCTA