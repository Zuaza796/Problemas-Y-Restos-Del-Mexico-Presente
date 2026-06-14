import { getSourcesByIds } from '../data/sources'

function CitationTag({ sourceId, label }) {
  const [source] = getSourcesByIds([sourceId])

  if (!source && !label) return null

  const text = label || `Fuente: ${source.name}`

  if (!source?.url) {
    return <span className="citation-tag">{text}</span>
  }

  return (
    <a className="citation-tag" href={source.url} target="_blank" rel="noreferrer">
      {text}
    </a>
  )
}

export default CitationTag
