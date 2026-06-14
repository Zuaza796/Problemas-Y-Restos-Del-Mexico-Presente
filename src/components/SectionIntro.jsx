function SectionIntro({ eyebrow, title, summary, centered = false }) {
  return (
    <div className={`section-intro reveal ${centered ? 'text-center mx-auto' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {summary ? <p>{summary}</p> : null}
    </div>
  )
}

export default SectionIntro
