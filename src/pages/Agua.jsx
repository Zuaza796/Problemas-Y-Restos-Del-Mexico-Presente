import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import HorizontalBarChart from '../components/charts/HorizontalBarChart'
import { waterAvailabilityData } from '../data/chartData'
import { topics } from '../data/topics'

function Agua() {
  return (
    <TopicPageScaffold
      topic={topics.agua}
      charts={
        <HorizontalBarChart
          data={waterAvailabilityData}
          yKey="label"
          title="Disponibilidad natural media por habitante"
          description="Caida historica y proyeccion hacia 2030 citadas por IMTA."
          unit="m3 anuales"
          height={300}
        />
      }
      dataCards={
        <>
          <div className="col-md-4">
            <StatCard
              icon="bi-map"
              value="66%"
              label="Territorio nacional arido o semiarido"
              detail="Dato citado por el IMTA."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-flower1"
              value="70%+"
              label="Agua concesionada usada por la agricultura"
              detail="Debe leerse como reto de tecnificacion, no como culpa simple al campo."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-tools"
              value="35%"
              label="Perdida aproximada de agua por fugas en CDMX"
              detail="Dato citado en el MD a partir de especialistas de la UNAM."
            />
          </div>
        </>
      }
    />
  )
}

export default Agua
