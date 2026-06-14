function HumanImpactCard({ item }) {
  if (!item) return null

  return (
    <article className="human-impact-card reveal">
      <i className={`bi ${item.icon || 'bi-person-heart'}`} aria-hidden="true"></i>
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  )
}

export default HumanImpactCard
