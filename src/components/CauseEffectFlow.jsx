function CauseEffectFlow({ items, title = 'Flujo de causa y consecuencia' }) {
  if (!items?.length) return null

  return (
    <article className="flow-panel reveal">
      <h3>{title}</h3>
      <div className="cause-effect-flow" role="list">
        {items.map((item) => (
          <div className="flow-node" role="listitem" key={item}>
            {item}
          </div>
        ))}
      </div>
    </article>
  )
}

export default CauseEffectFlow
