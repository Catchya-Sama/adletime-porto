import Reveal from '../motion/Reveal.jsx'
import TextReveal from '../motion/TextReveal.jsx'

function SkillsPanel({ profile }) {
  const hasTools = profile.tools.length > 0

  return (
    <div className="skills-panel">
      <Reveal className="skills-panel__intro">
        <p className="section-kicker">Skills &amp; tools</p>
        <TextReveal as="h2">Perangkat hanyalah alat. Cerita tetap menjadi pusatnya.</TextReveal>
        <p>
          Area ini disiapkan untuk merangkum software, teknik, dan fokus produksi yang
          benar-benar digunakan pemilik portofolio.
        </p>
      </Reveal>

      {hasTools ? (
        <ul className="tools-grid" aria-label="Daftar tools">
          {profile.tools.map((tool, index) => (
            <Reveal as="li" key={tool.id} delay={index * 0.06} duration={0.4} distance={20}>
              <span className="tools-grid__mark" aria-hidden="true">
                {tool.name.slice(0, 2).toUpperCase()}
              </span>
              <strong>{tool.name}</strong>
              {tool.description && <p>{tool.description}</p>}
            </Reveal>
          ))}
        </ul>
      ) : (
        <Reveal className="exhibition-empty-state">
          <p className="section-kicker">Menunggu konten</p>
          <h3>Daftar skill dan tools belum diisi.</h3>
          <p>
            Software atau kemampuan tidak diasumsikan. Data akan ditambahkan setelah
            dikonfirmasi pada tahap konten pribadi.
          </p>
        </Reveal>
      )}

      <Reveal className="skills-panel__note" delay={0.15}>
        <span aria-hidden="true">01</span>
        <p>
          Struktur grid telah siap menampung nama tools dan keterangan singkat tanpa
          mengubah layout halaman.
        </p>
      </Reveal>
    </div>
  )
}

export default SkillsPanel