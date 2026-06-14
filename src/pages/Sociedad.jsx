import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import VisualPanel from '../components/VisualPanel'
import { topics } from '../data/topics'

function Sociedad() {
  return (
    <TopicPageScaffold
      topic={topics.pobreza}
      dataCards={
        <>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-people"
              value="38.5 millones"
              label="Personas en pobreza multidimensional en 2024"
              detail="Equivale a 29.6% de la poblacion."
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-exclamation-circle"
              value="7.0 millones"
              label="Personas en pobreza extrema"
              detail="5.3% de la poblacion."
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-journal-x"
              value="24.2 millones"
              label="Personas con rezago educativo"
              detail="Una carencia que condiciona empleo y movilidad."
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-heart-pulse"
              value="44.5 millones"
              label="Personas con carencia por acceso a salud"
              detail="Muestra la distancia entre ingreso y derechos efectivos."
            />
          </div>
        </>
      }
      extraPanels={
        <VisualPanel
          title="Lectura territorial"
          description="La desigualdad no se distribuye igual: Chiapas, Guerrero y Oaxaca siguen concentrando rezagos importantes."
        >
          <div className="territory-strip">
            <span>Norte industrial</span>
            <span>Centro urbano</span>
            <span>Sur con rezagos persistentes</span>
          </div>
        </VisualPanel>
      }
    />
  )
}

export default Sociedad
