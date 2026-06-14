import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import { topics } from '../data/topics'

function Instituciones() {
  return (
    <TopicPageScaffold
      topic={topics.instituciones}
      dataCards={
        <>
          <div className="col-md-4">
            <StatCard
              icon="bi-bank"
              value="7"
              label="Organismos autonomos o reguladores desaparecidos"
              detail="INAI, CONEVAL, IFT, COFECE, CRE, CNH y Mejoredu."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-piggy-bank"
              value="Ahorro"
              label="Argumento oficial de simplificacion administrativa"
              detail="Debe compararse con el costo de perder capacidades independientes."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-person-badge"
              value="2025"
              label="Eleccion judicial inedita"
              detail="Abre retos de independencia, profesionalismo y captura politica."
            />
          </div>
        </>
      }
    />
  )
}

export default Instituciones
