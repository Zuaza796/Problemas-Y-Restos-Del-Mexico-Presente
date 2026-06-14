function OpportunityLimitGrid({ opportunities = [], limits = [] }) {
  if (!opportunities.length && !limits.length) return null

  return (
    <div className="opportunity-limit-grid">
      <article>
        <h3>Oportunidades</h3>
        <ul>
          {opportunities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article>
        <h3>Limites estructurales</h3>
        <ul>
          {limits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default OpportunityLimitGrid
