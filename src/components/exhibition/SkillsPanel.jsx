function SkillsPanel({ profile }) {
  const hasTools = profile.tools.length > 0

  return (
    <div className="skills-panel">
      <div className="skills-panel__intro">
        <p className="section-kicker">Skills &amp; tools</p>
        <h2>Perangkat hanyalah alat. Cerita tetap menjadi pusatnya.</h2>
        <p>
          Area ini disiapkan untuk merangkum software, teknik, dan fokus produksi yang
          benar-benar digunakan pemilik portofolio.
        </p>
      </div>

      {hasTools ? (
        <ul className="tools-grid" aria-label="Daftar tools">
          {profile.tools.map((tool) => (
            <li key={tool.id}>
              <span className="tools-grid__mark" aria-hidden="true">
                {tool.name.slice(0, 2).toUpperCase()}
              </span>
              <strong>{tool.name}</strong>
              {tool.description && <p>{tool.description}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <div className="exhibition-empty-state">
          <p className="section-kicker">Menunggu konten</p>
          <h3>Daftar skill dan tools belum diisi.</h3>
          <p>
            Software atau kemampuan tidak diasumsikan. Data akan ditambahkan setelah
            dikonfirmasi pada tahap konten pribadi.
          </p>
        </div>
      )}

      <div className="skills-panel__note">
        <span aria-hidden="true">01</span>
        <p>
          Struktur grid telah siap menampung nama tools dan keterangan singkat tanpa
          mengubah layout halaman.
        </p>
      </div>
    </div>
  )
}

export default SkillsPanel