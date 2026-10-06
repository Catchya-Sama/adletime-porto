import Reveal from './motion/Reveal.jsx'

function HireCard({ profile }) {
  const hasPortrait = Boolean(profile.portrait?.src && profile.portrait?.alt)
  const contactContent = profile.email ? (
    <a className="hire-card__contact" href={`mailto:${profile.email}`}>
      Hubungi saya
    </a>
  ) : (
    <span className="hire-card__contact hire-card__contact--disabled">
      Email belum tersedia
    </span>
  )

  return (
    <Reveal
      as="article"
      className="hire-card"
      aria-label="Kartu kontak"
      delay={0.6}
      distance={30}
      duration={0.7}
    >
      {hasPortrait ? (
        <img
          className="hire-card__portrait hire-card__portrait--image"
          src={profile.portrait.src}
          alt={profile.portrait.alt}
        />
      ) : (
        <div className="hire-card__portrait" aria-label="Foto profil belum tersedia" role="img">
          <span>Foto</span>
          <small>Belum tersedia</small>
        </div>
      )}

      <div className="hire-card__content">
        <p className="hire-card__label">Available for creative work</p>
        <h2>{profile.publicName}</h2>
        <p>{profile.profession}</p>
        {contactContent}
      </div>

      <span className="hire-card__stamp" aria-hidden="true">
        Hire
        <br />
        Me
      </span>
    </Reveal>
  )
}

export default HireCard