function HireCard({ profile }) {
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
    <article className="hire-card" aria-label="Kartu kontak">
      <div className="hire-card__portrait" aria-label="Placeholder foto profil" role="img">
        <span>Foto</span>
        <small>Tahap 5</small>
      </div>

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
    </article>
  )
}

export default HireCard