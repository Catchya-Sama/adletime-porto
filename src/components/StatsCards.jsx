function StatsCards({ stats }) {
  return (
    <dl className="stats-grid" aria-label="Statistik profil">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.id}>
          <dt>{stat.label}</dt>
          <dd className={stat.value ? undefined : 'stat-card__placeholder'}>
            {stat.value ?? 'Belum diisi'}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default StatsCards