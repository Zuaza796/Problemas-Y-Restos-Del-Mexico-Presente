import { Link } from 'react-router-dom'
import { navigationItems } from '../data/navigation'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <h2>Problemas y retos de el México presente</h2>
            <p>Sitio editorial de difusion informativa.</p>
            <p className="academic-note">
              Este sitio web es un proyecto academico de la carrera de Electromecanica,
              grupo 601, del CONALEP 103.
            </p>
            <p className="academic-note">Material elaborado con fines educativos y de difusion.</p>
          </div>
          <div className="col-lg-7">
            <nav aria-label="Navegacion secundaria">
              <ul className="footer-links">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
