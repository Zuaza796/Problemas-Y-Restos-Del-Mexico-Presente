function ChallengeCard({ challenge }) {
  return (
    <article className="challenge-card reveal">
      <div className="card-icon" aria-hidden="true">
        <i className={`bi ${challenge.icon}`}></i>
      </div>
      <span className="chip">{challenge.category}</span>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
    </article>
  )
}

export default ChallengeCard
