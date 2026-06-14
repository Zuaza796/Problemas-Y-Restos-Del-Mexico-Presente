import { topicImages } from '../data/topicImages'
import TopicImage from './TopicImage'

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="hero-copy reveal">
              <p className="eyebrow">Análisis social y económico</p>
              <h1>Problemas y retos de el México presente</h1>
              <p className="hero-subtitle">
                Una mirada clara a los desafíos económicos, sociales, institucionales y
                ambientales que definen el rumbo actual del país.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a className="btn btn-primary-custom" href="#panorama">
                  Explorar temas
                </a>
                <a className="btn btn-outline-custom" href="#datos-clave">
                  Ver datos clave
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-panel reveal">
              <TopicImage image={topicImages.panorama} className="hero-image" />
              <article className="editorial-card">
                <span className="meta-label">Lectura central</span>
                <h2>La paradoja del México presente</h2>
                <p>
                  El país tiene una posición estratégica para aprovechar el nearshoring,
                  pero enfrenta límites profundos en instituciones, agua, educación,
                  seguridad y finanzas públicas.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
