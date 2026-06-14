function StatCard({ value, label, detail, icon = 'bi-activity' }) {
  return (
    <article className="stat-card reveal">
      <div className="card-icon" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </div>
      <strong>{value}</strong>
      <p>{label}</p>
      {detail ? <small>{detail}</small> : null}
    </article>
  )
}

export default StatCard
