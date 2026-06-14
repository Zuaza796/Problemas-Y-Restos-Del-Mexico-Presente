import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import BarChartBox from '../components/charts/BarChartBox'
import { impunityData } from '../data/chartData'
import { topics } from '../data/topics'

function Seguridad() {
  return (
    <TopicPageScaffold
      topic={topics.seguridad}
      charts={
        <BarChartBox
          data={impunityData}
          xKey="crime"
          yKey="value"
          title="Cifra negra e impunidad"
          description="Una grafica basta para mostrar la magnitud del problema."
          unit="%"
        />
      }
      dataCards={
        <>
          <div className="col-md-4">
            <StatCard
              icon="bi-eye-slash"
              value="93.2%"
              label="Cifra negra estimada por ENVIPE 2025"
              detail="Delitos que no se denuncian o no derivan en investigacion."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-house-exclamation"
              value="29%"
              label="Hogares con al menos una victima de delito"
              detail="Mas de 11.4 millones de viviendas, segun el MD."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-shop-window"
              value="Extorsion"
              label="Impuesto criminal sobre negocios y familias"
              detail="Se explica como fenomeno economico y de control territorial."
            />
          </div>
        </>
      }
    />
  )
}

export default Seguridad
