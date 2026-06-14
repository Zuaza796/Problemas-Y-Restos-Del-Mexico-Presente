function WarningNote({ title = 'Punto a verificar', text }) {
  if (!text) return null

  return (
    <aside className="warning-note reveal">
      <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </aside>
  )
}

export default WarningNote
