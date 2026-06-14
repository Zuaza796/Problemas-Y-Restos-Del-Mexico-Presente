import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import ComparisonChart from '../components/charts/ComparisonChart'
import { pisaComparisonData } from '../data/chartData'
import { topics } from '../data/topics'

function Educacion() {
  return (
    <TopicPageScaffold
      topic={topics.educacion}
      charts={
        <ComparisonChart
          data={pisaComparisonData}
          title="PISA 2022: Mexico vs OCDE"
          description="Puntaje promedio reportado por IMCO."
          unit="puntos"
        />
      }
      dataCards={
        <>
          <div className="col-md-4">
            <StatCard
              icon="bi-calculator"
              value="2 de cada 3"
              label="Estudiantes sin competencias basicas en matematicas"
              detail="Sintesis de IMCO a partir de PISA 2022."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-bar-chart-steps"
              value="35 de 37"
              label="Lugar de Mexico entre paises OCDE evaluados"
              detail="El dato dimensiona rezago relativo."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-clipboard-data"
              value="Menos evaluacion"
              label="INEE eliminado y Mejoredu desaparecida, segun IMCO"
              detail="El reto es diagnosticar sin perder independencia tecnica."
            />
          </div>
        </>
      }
    />
  )
}

export default Educacion
