import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../data/navigation'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg" aria-label="Navegacion principal">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
            México Presente
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label="Abrir menu de navegacion"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="primary-navigation"
            className={`collapse navbar-collapse ${open ? 'show' : ''}`}
          >
            <ul className="navbar-nav ms-lg-auto">
              {navigationItems.map((link) => (
                <li className="nav-item" key={link.path}>
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
