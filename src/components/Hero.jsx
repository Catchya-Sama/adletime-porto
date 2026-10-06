import HireCard from './HireCard.jsx'
import StatsCards from './StatsCards.jsx'
import Reveal from './motion/Reveal.jsx'

function Hero({ profile }) {
  const hasCertifications = profile.certifications.length > 0

  return (
    <section className="home-hero container" aria-labelledby="home-title">
      <Reveal className="home-hero__statement" direction="left" distance={60} duration={0.8}>
        <p className="eyebrow">Editing · Motion · Visual Effects</p>
        <h1 id="home-title">
          Visual stories,
          <em> crafted in motion.</em>
        </h1>
        <HireCard profile={profile} />
      </Reveal>

      <Reveal className="home-hero__profile" direction="right" distance={40} duration={0.7} delay={0.3}>
        <Reveal className="home-hero__intro" delay={0.15}>
          <p className="section-kicker">Perkenalan</p>
          <p>{profile.heroIntro}</p>
          <p className="home-hero__profession">{profile.profession}</p>
        </Reveal>

        <StatsCards stats={profile.stats} />

        <Reveal className="credentials-block" delay={0.35} distance={20}>
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
        </Reveal>
      </Reveal>
    </section>
  )
}

export default Hero