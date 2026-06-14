import { Link } from 'react-router-dom'
import { topicImages } from '../data/topicImages'
import Breadcrumb from './Breadcrumb'
import CauseEffectFlow from './CauseEffectFlow'
import CitationTag from './CitationTag'
import HumanImpactCard from './HumanImpactCard'
import InsightCard from './InsightCard'
import InstitutionalTable from './InstitutionalTable'
import PageHero from './PageHero'
import PageLayout from './PageLayout'
import ProblemExplainer from './ProblemExplainer'
import ResponsiveTable from './ResponsiveTable'
import VisualPanel from './VisualPanel'
import WarningNote from './WarningNote'

function CitationRow({ sourceIds = [] }) {
  if (!sourceIds.length) return null

  return (
    <div className="citation-row">
      {sourceIds.map((sourceId) => (
        <CitationTag sourceId={sourceId} key={sourceId} />
      ))}
    </div>
  )
}

function NarrativeGrid({ title, eyebrow, items = [], variant = 'default' }) {
  if (!items.length) return null

  return (
    <section className={`narrative-section narrative-${variant}`}>
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="row g-4">
          {items.map((item) => (
            <div className="col-md-6 col-xl-4" key={item.title}>
              <article className="narrative-card reveal">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExplainerBlocks({ items = [] }) {
  if (!items.length) return null

  return (
    <VisualPanel
      title="Conceptos que conviene distinguir"
      description="Estos bloques evitan que datos o terminos tecnicos se lean como si fueran lo mismo."
    >
      <div className="explainer-grid">
        {items.map((item) => (
          <article className="mini-explainer" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </VisualPanel>
  )
}

function CaseBlocks({ items = [] }) {
  if (!items.length) return null

  return (
    <div className="case-grid">
      {items.map((item) => (
        <article className="case-block reveal" key={item.title}>
          <p className="eyebrow">Caso / lectura concreta</p>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  )
}

function MatrixPanel({ matrix }) {
  if (!matrix) return null

  return (
    <VisualPanel title={matrix.title} description="Lectura cualitativa para ubicar prioridades.">
      <div className="matrix-grid">
        {matrix.items.map(([label, status]) => (
          <div className="matrix-item" key={label}>
            <span>{label}</span>
            <strong>{status}</strong>
          </div>
        ))}
      </div>
    </VisualPanel>
  )
}

function TopicPageScaffold({ topic, charts, dataCards, extraPanels, afterSummary }) {
  const hasVisualContent =
    charts ||
    dataCards ||
    topic.matrix ||
    topic.flow ||
    topic.table ||
    topic.explainerBlocks ||
    topic.caseBlocks ||
    topic.institutions ||
    extraPanels

  return (
    <PageLayout title={topic.navLabel}>
      <Breadcrumb current={topic.navLabel} />
      <PageHero
        eyebrow={topic.eyebrow}
        title={topic.title}
        summary={topic.summary}
        image={topicImages[topic.imageKey]}
      />

      <section className="section-block topic-opening">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <article className="topic-copy reveal">
                <p className="eyebrow">Introduccion del problema</p>
                <h2>Que problema se aborda</h2>
                <p className="topic-summary">{topic.problemIntro}</p>
                <CitationRow sourceIds={topic.sourceIds?.slice(0, 3)} />
              </article>
            </div>
            <div className="col-lg-5">
              <article className="key-idea-panel reveal">
                <p className="eyebrow">Idea clave</p>
                <h3>{topic.keyIdea}</h3>
              </article>
              <div className="insight-stack mt-4">
                {topic.consequences?.slice(0, 2).map((impact) => (
                  <HumanImpactCard
                    key={impact.title}
                    item={{ ...impact, icon: 'bi-arrow-up-right-circle' }}
                  />
                ))}
              </div>
            </div>
          </div>
          {afterSummary}
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <ProblemExplainer
            title="Lo que realmente esta pasando"
            text={topic.background}
            sourceIds={topic.sourceIds}
          />
          {topic.warning ? <WarningNote {...topic.warning} /> : null}
        </div>
      </section>

      <NarrativeGrid title="Causas estructurales" eyebrow="Por que ocurre" items={topic.causes} />

      <NarrativeGrid
        title="Consecuencias reales"
        eyebrow="Como afecta"
        items={topic.consequences}
        variant="consequences"
      />

      {hasVisualContent ? (
        <section className="section-block section-muted visual-reading-section">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">Lectura visual</p>
              <h2>Datos, flujos y comparaciones que si aportan</h2>
              <p>
                Las graficas se reservan para comparaciones o tendencias. Los datos puntuales
                se muestran como tarjetas, tablas o secuencias de causa y consecuencia.
              </p>
            </div>
            {charts ? <div className="chart-grid focused-chart-grid">{charts}</div> : null}
            {dataCards ? <div className="row g-4 data-card-row">{dataCards}</div> : null}
            <MatrixPanel matrix={topic.matrix} />
            <CauseEffectFlow items={topic.flow} />
            <ExplainerBlocks items={topic.explainerBlocks} />
            <CaseBlocks items={topic.caseBlocks} />
            {topic.institutions ? (
              <>
                <VisualPanel title="Contrapesos y funciones tecnicas" description={topic.institutionsIntro}>
                  <div className="institution-mini-grid">
                    {topic.institutions.map((institution) => (
                      <InsightCard
                        key={institution.name}
                        icon="bi-bank"
                        title={institution.name}
                        text={`${institution.function} Riesgo: ${institution.risk}`}
                      />
                    ))}
                  </div>
                </VisualPanel>
                <InstitutionalTable items={topic.institutions} />
              </>
            ) : null}
            {extraPanels}
            <ResponsiveTable table={topic.table} title="Lectura por areas" />
          </div>
        </section>
      ) : null}

      <section className="section-block">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="section-intro">
                <p className="eyebrow">Retos principales</p>
                <h2>Lo que debe resolverse</h2>
                <p>
                  Cada reto muestra el obstaculo real y lo que pasa si se deja como problema
                  normalizado.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="challenge-list">
                {topic.realChallenges?.map((challenge) => (
                  <article className="challenge-row challenge-row-expanded reveal" key={challenge.title}>
                    <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
                    <div>
                      <h3>{challenge.title}</h3>
                      <p>{challenge.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block connections-section">
        <div className="container">
          <article className="connections-panel reveal">
            <p className="eyebrow">Relacion con otros temas</p>
            <h2>Los problemas se alimentan entre si</h2>
            <p>{topic.connections}</p>
          </article>
        </div>
      </section>

      <section className="section-block meaning-section">
        <div className="container">
          <article className="meaning-panel reveal">
            <div>
              <p className="eyebrow">Cierre reflexivo</p>
              <h2>Idea final del tema</h2>
              <p>{topic.conclusion}</p>
            </div>
            <div className="page-actions">
              <Link className="btn btn-outline-custom" to="/">
                <i className="bi bi-house-door" aria-hidden="true"></i>
                Inicio
              </Link>
              <Link className="btn btn-primary-custom" to={topic.nextPath}>
                Ver {topic.nextLabel}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  )
}

export default TopicPageScaffold
