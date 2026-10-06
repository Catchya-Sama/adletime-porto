import HireCard from './HireCard.jsx'
import StatsCards from './StatsCards.jsx'

function Hero({ profile }) {
  const hasCertifications = profile.certifications.length > 0

  return (
    <section className="home-hero container" aria-labelledby="home-title">
      <div className="home-hero__statement">
        <p className="eyebrow">Editing · Motion · Visual Effects</p>
        <h1 id="home-title">
          Visual stories,
          <em> crafted in motion.</em>
        </h1>
        <HireCard profile={profile} />
      </div>

      <div className="home-hero__profile">
        <div className="home-hero__intro">
          <p className="section-kicker">Perkenalan</p>
          <p>{profile.heroIntro}</p>
          <p className="home-hero__profession">{profile.profession}</p>
        </div>

        <StatsCards stats={profile.stats} />

        <div className="credentials-block">
          <p className="section-kicker">Sertifikasi &amp; pencapaian</p>
          {hasCertifications ? (
            <ul>
              {profile.certifications.map((certification) => (
                <li key={certification.id}>{certification.label}</li>
              ))}
            </ul>
          ) : (
            <p className="credentials-block__empty">
              Belum ada data terkonfirmasi. Bagian ini akan diisi tanpa mengarang
              pencapaian.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero