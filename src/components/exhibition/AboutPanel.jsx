function FieldValue({ value, fallback }) {
  return <dd className={value ? undefined : 'exhibition-placeholder'}>{value ?? fallback}</dd>
}

function AboutPanel({ profile }) {
  return (
    <div className="about-panel">
      <div className="about-panel__portrait" role="img" aria-label="Foto profil belum tersedia">
        <span>Foto profil</span>
        <small>Belum tersedia</small>
      </div>

      <div className="about-panel__story">
        <p className="section-kicker">Profile &amp; practice</p>
        <h2>Tentang kreator di balik setiap frame.</h2>
        <p className={profile.bio ? undefined : 'exhibition-placeholder'}>
          {profile.bio ??
            'Bio pribadi belum diisi. Bagian ini kelak menjelaskan pendekatan kreatif, pengalaman, dan cara bekerja secara ringkas.'}
        </p>

        <dl className="about-panel__facts">
          <div>
            <dt>Lokasi</dt>
            <FieldValue value={profile.location} fallback="Belum diisi" />
          </div>
          <div>
            <dt>Fokus</dt>
            <FieldValue
              value={profile.focusAreas.length ? profile.focusAreas.join(', ') : null}
              fallback="Belum diisi"
            />
          </div>
          <div>
            <dt>Ketersediaan</dt>
            <FieldValue value={profile.availability} fallback="Belum dikonfirmasi" />
          </div>
        </dl>
      </div>

      <aside className="about-panel__summary" aria-label="Ringkasan profil">
        <p className="section-kicker">At a glance</p>
        <dl className="exhibition-stats">
          {profile.stats.map((stat) => (
            <div key={stat.id}>
              <dt>{stat.label}</dt>
              <dd className={stat.value ? undefined : 'exhibition-placeholder'}>
                {stat.value ?? 'Belum diisi'}
              </dd>
            </div>
          ))}
        </dl>

        <div className="about-panel__credentials">
          <h3>Sertifikasi &amp; pencapaian</h3>
          {profile.certifications.length ? (
            <ul>
              {profile.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          ) : (
            <p className="exhibition-placeholder">Belum ada data terkonfirmasi.</p>
          )}
        </div>
      </aside>
    </div>
  )
}

export default AboutPanel