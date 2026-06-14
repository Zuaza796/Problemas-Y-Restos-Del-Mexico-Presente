import Breadcrumb from '../components/Breadcrumb'
import CauseEffectFlow from '../components/CauseEffectFlow'
import PageLayout from '../components/PageLayout'
import SourceList from '../components/SourceList'
import VisualPanel from '../components/VisualPanel'
import { sources } from '../data/sources'

const normalizations = [
  'Se normaliza que millones no denuncien.',
  'Se normaliza que estudiantes no aprendan matematicas basicas.',
  'Se normaliza que la gente espere atencion medica.',
  'Se normaliza que el agua falte en colonias pobres.',
  'Se normaliza que Pemex absorba recursos publicos.',
  'Se normaliza que instituciones independientes desaparezcan bajo el argumento de ahorro.',
]

function Conclusion() {
  return (
    <PageLayout title="Mexico ante una oportunidad que puede perderse">
      <Breadcrumb current="Conclusion" />
      <section className="conclusion-hero">
        <div className="container">
          <div className="conclusion-copy reveal">
            <p className="eyebrow">Conclusion</p>
            <h1>Mexico ante una oportunidad que puede perderse</h1>
            <p>
              Mexico no falla por falta de potencial. Falla cuando permite que problemas
              estructurales se acumulen hasta volverse normales.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="row g-4">
            {normalizations.map((item) => (
              <div className="col-md-6" key={item}>
                <article className="normalization-card reveal">
                  <i className="bi bi-exclamation-diamond" aria-hidden="true"></i>
                  <p>{item}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-muted">
        <div className="container">
          <VisualPanel
            title="La ventana no es infinita"
            description="Nearshoring, estabilidad financiera y bono demografico son oportunidades reales, pero dependen de decisiones publicas verificables."
          >
            <CauseEffectFlow
              title="Oportunidad que exige capacidades"
              items={[
                'Ventajas reales',
                'Problemas estructurales',
                'Decisiones publicas',
                'Desarrollo o oportunidad perdida',
              ]}
            />
            <p className="closing-essay">
              El pais no necesita pesimismo. Necesita seriedad. Una nacion no se transforma
              negando sus datos, atacando a quien los mide o maquillando sus carencias. Se
              transforma cuando reconoce la gravedad de sus problemas y construye soluciones
              verificables: infraestructura que funcione, educacion que ensene, agua que se
              cuide, justicia que investigue e instituciones que puedan vigilar al poder.
            </p>
          </VisualPanel>
        </div>
      </section>

      <SourceList sources={sources} />
    </PageLayout>
  )
}

export default Conclusion
