import { Link } from 'react-router-dom'
import CauseEffectFlow from '../components/CauseEffectFlow'
import OpportunityLimitGrid from '../components/OpportunityLimitGrid'
import PageHero from '../components/PageHero'
import PageLayout from '../components/PageLayout'
import VisualPanel from '../components/VisualPanel'
import { navigationItems } from '../data/navigation'
import { topicImages } from '../data/topicImages'

const topicCards = navigationItems.filter((item) => !['/', '/conclusion'].includes(item.path))

function Home() {
  return (
    <PageLayout title="Inicio">
      <PageHero
        eyebrow="Portada editorial"
        title="Problemas y retos de el México presente"
        summary="México 2026: oportunidades históricas frente a problemas estructurales."
        image={topicImages.panorama}
      />

      <section className="section-block thesis-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <article className="editorial-lead reveal">
                <p className="eyebrow">Tesis central</p>
                <h2>Mexico tiene potencial, pero tambien limites que ya no puede normalizar.</h2>
                <p>
                  El pais cuenta con cercania a Estados Unidos, tratados comerciales, base
                  manufacturera, poblacion joven, mercado interno y oportunidad por nearshoring.
                  Pero esas ventajas chocan con bajo crecimiento, presion fiscal, Pemex,
                  inseguridad, impunidad, deterioro educativo, crisis hidrica, desigualdad,
                  debilidad institucional y perdida de contrapesos.
                </p>
                <p>
                  Este sitio no busca propaganda ni opinion suelta. Explica problemas de fondo
                  con datos, contexto y fuentes, mostrando por que importan, que los causa y que
                  consecuencias tienen para la vida diaria.
                </p>
              </article>
            </div>
            <div className="col-lg-5">
              <VisualPanel title="La paradoja mexicana" variant="wide">
                <OpportunityLimitGrid
                  opportunities={[
                    'Cercania con Estados Unidos',
                    'Tratados comerciales',
                    'Base manufacturera',
                    'Poblacion joven',
                    'Mercado interno',
                    'Nearshoring',
                  ]}
                  limits={[
                    'Falta de agua',
                    'Energia e infraestructura insuficiente',
                    'Inseguridad',
                    'Impunidad',
                    'Rezago educativo',
                    'Presion fiscal',
                    'Debilidad institucional',
                  ]}
                />
              </VisualPanel>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-muted">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Mapa conceptual</p>
            <h2>Los retos no estan aislados</h2>
            <p>
              El valor del diagnostico esta en ver conexiones: una falla educativa limita la
              productividad, una fiscalia debil alimenta impunidad y una crisis de agua puede
              frenar industria, salud y vivienda.
            </p>
          </div>
          <div className="connection-map">
            <CauseEffectFlow
              title="Educacion y productividad"
              items={['Educacion', 'Productividad', 'Nearshoring']}
            />
            <CauseEffectFlow
              title="Seguridad e inversion"
              items={['Seguridad', 'Inversion', 'Empleo']}
            />
            <CauseEffectFlow
              title="Pemex y presupuesto"
              items={['Pemex', 'Presion fiscal', 'Menos infraestructura']}
            />
            <CauseEffectFlow
              title="Agua y desarrollo regional"
              items={['Agua', 'Industria / salud / agricultura', 'Desarrollo regional']}
            />
            <CauseEffectFlow
              title="Instituciones y confianza"
              items={['Instituciones', 'Confianza', 'Estado de derecho']}
            />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Pestañas principales</p>
            <h2>Explora los temas</h2>
            <p>
              Cada seccion desarrolla introduccion, diagnostico, causas, consecuencias, retos,
              conexiones y cierre reflexivo.
            </p>
          </div>
          <div className="row g-4">
            {topicCards.map((item) => (
              <div className="col-md-6 col-xl-4" key={item.path}>
                <article className="home-topic-card reveal">
                  <div className="card-icon" aria-hidden="true">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <Link className="btn btn-outline-custom" to={item.path}>
                    Ver tema
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Home
