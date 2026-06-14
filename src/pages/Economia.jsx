import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import BarChartBox from '../components/charts/BarChartBox'
import LineChartBox from '../components/charts/LineChartBox'
import { gdpProjectionData, iedCompositionData } from '../data/chartData'
import { topics } from '../data/topics'

function Economia() {
  return (
    <TopicPageScaffold
      topic={topics.economia}
      charts={
        <>
          <LineChartBox
            data={gdpProjectionData}
            xKey="year"
            yKey="value"
            title="Crecimiento del PIB"
            description="Banxico y ajuste posterior citado en el MD para 2026."
          />
          <BarChartBox
            data={iedCompositionData}
            xKey="label"
            yKey="value"
            title="IED: inversion nueva vs resto"
            description="La inversion nueva represento 7.2% del total en 1T2026, segun IMCO."
            unit="%"
          />
        </>
      }
      dataCards={
        <>
          <div className="col-md-4">
            <StatCard
              icon="bi-currency-dollar"
              value="23,591 mdd"
              label="IED recibida en el primer trimestre de 2026"
              detail="Dato reportado por IMCO; debe leerse junto con su composicion."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-arrow-repeat"
              value="92.8%"
              label="Reinversion y otros flujos dentro de la IED"
              detail="La reinversion muestra permanencia, no necesariamente nuevas plantas."
            />
          </div>
          <div className="col-md-4">
            <StatCard
              icon="bi-globe-americas"
              value="43.3%"
              label="Participacion de Estados Unidos en la IED del 1T2026"
              detail="Ventaja de integracion, pero tambien dependencia externa."
            />
          </div>
        </>
      }
    />
  )
}

export default Economia
