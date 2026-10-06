import Reveal from './motion/Reveal.jsx'

function StatsCards({ stats }) {
  return (
    <Reveal as="dl" className="stats-grid" aria-label="Statistik profil" delay={0.55} distance={20}>
      {stats.map((stat, index) => (
        <Reveal className="stat-card" key={stat.id} delay={0.7 + index * 0.1} distance={20} duration={0.5}>
          <dt>{stat.label}</dt>
          <dd className={stat.value ? undefined : 'stat-card__placeholder'}>
            {stat.value ?? 'Belum diisi'}
          </dd>
        </Reveal>
      ))}
    </Reveal>
  )
}

export default StatsCards