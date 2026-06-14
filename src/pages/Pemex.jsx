import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import BarChartBox from '../components/charts/BarChartBox'
import { pemexSupportData } from '../data/chartData'
import { topics } from '../data/topics'

function Pemex() {
  return (
    <TopicPageScaffold
      topic={topics.pemex}
      charts={
        <BarChartBox
          data={pemexSupportData}
          xKey="year"
          yKey="value"
          title="Apoyo fiscal a Pemex"
          description="Montos reportados para 2025 y 2026."
          unit="millones de dolares"
        />
      }
      dataCards={
        <>
          <div className="col-md-4">
            <StatCard
              icon="bi-calendar-range"
              value="2028"
              label="Horizonte de presion financiera advertido por Moodys"
              detail="La advertencia apunta a flujo debil y dependencia del apoyo federal."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-cash-stack"
              value="40,000 mdd"
              label="Apoyo federal reportado para 2025"
              detail="Dato basado en la cobertura de Infobae sobre la advertencia de Moodys."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-signpost-split"
              value="Costo de oportunidad"
              label="Recursos que no pueden usarse simultaneamente en otros bienes publicos"
              detail="Agua, salud, educacion, seguridad, transporte e infraestructura compiten por presupuesto."
            />
          </div>
        </>
      }
    />
  )
}

export default Pemex
