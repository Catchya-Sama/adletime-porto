import { useId, useState } from 'react'

function JourneyItem({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const generatedId = useId()
  const panelId = `${experience.id}-${generatedId}`

  return (
    <article className="journey-card">
      <span className="journey-card__marker" aria-hidden="true" />
      <p className="journey-card__period">{experience.period}</p>
      <h3>{experience.title}</h3>
      <p className="journey-card__organization">{experience.organization}</p>
      <p className="journey-card__summary">{experience.summary}</p>

      <button
        className="journey-card__toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => setIsExpanded((current) => !current)}
      >
        <span>{isExpanded ? 'Tutup detail' : 'Buka detail'}</span>
        <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
      </button>

      {isExpanded && (
        <div className="journey-card__details" id={panelId}>
          <ul>
            {experience.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function Journey({ experiences }) {
  return (
    <section className="journey-section container" aria-labelledby="journey-title">
      <div className="journey-section__heading">
        <p className="section-kicker">Milestones &amp; experience</p>
        <h2 id="journey-title">
          The <em>Journey</em>
        </h2>
        <p>
          Catatan perjalanan yang kelak merangkum proses belajar, pengalaman, dan
          perkembangan karya secara jujur.
        </p>
      </div>

      <div className="journey-timeline">
        {experiences.map((experience) => (
          <JourneyItem experience={experience} key={experience.id} />
        ))}
      </div>
    </section>
  )
}

export default Journey