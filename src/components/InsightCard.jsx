function InsightCard({ icon = 'bi-lightbulb', title, text, meta }) {
  return (
    <article className="insight-card reveal">
      <div className="card-icon" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </div>
      {meta ? <p className="meta-label">{meta}</p> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default InsightCard
