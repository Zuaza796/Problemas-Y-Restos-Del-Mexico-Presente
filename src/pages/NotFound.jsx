import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

function NotFound() {
  return (
    <PageLayout title="Página no encontrada">
      <section className="not-found-page">
        <div className="container">
          <article className="meaning-panel reveal">
            <div>
              <p className="eyebrow">404</p>
              <h1>Página no encontrada</h1>
              <p className="hero-subtitle">
                La ruta solicitada no existe dentro de esta aplicación informativa.
              </p>
            </div>
            <Link className="btn btn-primary-custom" to="/">
              Volver al inicio
            </Link>
          </article>
        </div>
      </section>
    </PageLayout>
  )
}

export default NotFound
