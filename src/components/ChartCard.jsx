function ChartCard({ title, description, children, note }) {
  return (
    <article className="chart-card reveal">
      <div className="chart-header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="chart-frame">{children}</div>
      {note ? <p className="chart-note">{note}</p> : null}
    </article>
  )
}

export default ChartCard
