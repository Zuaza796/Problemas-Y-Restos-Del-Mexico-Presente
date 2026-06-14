import CitationTag from './CitationTag'

function ProblemExplainer({ title, text, sourceIds = [] }) {
  if (!text) return null

  return (
    <article className="problem-explainer reveal">
      <p className="eyebrow">Diagnostico de fondo</p>
      <h2>{title}</h2>
      <p>{text}</p>
      {sourceIds.length ? (
        <div className="citation-row">
          {sourceIds.map((sourceId) => (
            <CitationTag sourceId={sourceId} key={sourceId} />
          ))}
        </div>
      ) : null}
    </article>
  )
}

export default ProblemExplainer
