import { Link } from 'react-router-dom'

function Breadcrumb({ current }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Ruta de navegación">
      <Link to="/">Inicio</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  )
}

export default Breadcrumb
