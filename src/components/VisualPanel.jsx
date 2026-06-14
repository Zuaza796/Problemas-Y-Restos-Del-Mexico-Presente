function VisualPanel({ title, description, children, variant = 'default' }) {
  return (
    <article className={`visual-panel visual-panel-${variant} reveal`}>
      <div className="visual-panel-header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </article>
  )
}

export default VisualPanel
