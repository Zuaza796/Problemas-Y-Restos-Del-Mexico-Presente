import { sourceTypeLabels } from '../data/sources'

function SourceList({ sources = [] }) {
  if (!sources.length) return null

  const grouped = sources.reduce((acc, source) => {
    acc[source.type] = acc[source.type] || []
    acc[source.type].push(source)
    return acc
  }, {})

  return (
    <section className="section-block bibliography-section" id="fuentes">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Bibliografia</p>
          <h2>Fuentes consultadas</h2>
          <p>
            Las fuentes se muestran por tipo para distinguir datos oficiales, analisis
            tecnico, seguimiento financiero y periodismo usado como contexto.
          </p>
        </div>
        <div className="source-groups">
          {Object.entries(grouped).map(([type, group]) => (
            <article className="source-group reveal" key={type}>
              <h3>{sourceTypeLabels[type] || type}</h3>
              <ul>
                {group.map((source) => (
                  <li key={source.id}>
                    {source.url ? (
                      <a href={source.url} target="_blank" rel="noreferrer">
                        <strong>{source.name}.</strong> {source.title}
                      </a>
                    ) : (
                      <span>
                        <strong>{source.name}.</strong> {source.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SourceList
