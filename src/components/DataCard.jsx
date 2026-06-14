function DataCard({ stat }) {
  return (
    <article className="data-card reveal">
      <span className="chip">{stat.category}</span>
      <strong>{stat.value}</strong>
      <p>{stat.label}</p>
    </article>
  )
}

export default DataCard
