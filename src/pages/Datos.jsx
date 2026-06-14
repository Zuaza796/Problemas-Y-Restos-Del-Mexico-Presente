import Breadcrumb from '../components/Breadcrumb'
import PageLayout from '../components/PageLayout'
import StatCard from '../components/StatCard'
import BarChartBox from '../components/charts/BarChartBox'
import ComparisonChart from '../components/charts/ComparisonChart'
import HorizontalBarChart from '../components/charts/HorizontalBarChart'
import LineChartBox from '../components/charts/LineChartBox'
import {
  gdpProjectionData,
  iedCompositionData,
  impunityData,
  pemexSupportData,
  pisaComparisonData,
  waterAvailabilityData,
} from '../data/chartData'

function Datos() {
  return (
    <PageLayout title="Datos clave">
      <Breadcrumb current="Datos clave" />
      <section className="page-hero compact-hero">
        <div className="container">
          <div className="page-hero-copy reveal">
            <p className="eyebrow">Datos clave</p>
            <h1>Datos clave</h1>
            <p className="hero-subtitle">
              Los datos no sustituyen el analisis. Sirven para dimensionar algunos problemas,
              pero cada cifra debe leerse junto con sus causas y consecuencias.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Seleccion editorial</p>
            <h2>Visualizaciones necesarias, no saturacion</h2>
            <p>
              Esta pagina resume el sitio con pocas piezas: crecimiento, IED, Pemex, pobreza,
              PISA, impunidad, salud y agua. Las cifras simples van en tarjetas.
            </p>
          </div>
          <div className="chart-grid focused-chart-grid">
            <LineChartBox
              data={gdpProjectionData}
              xKey="year"
              yKey="value"
              title="PIB / crecimiento proyectado"
              description="Mexico crece, pero poco para el tamano de sus retos."
            />
            <BarChartBox
              data={iedCompositionData}
              xKey="label"
              yKey="value"
              title="IED total vs inversion nueva"
              description="La inversion nueva fue 7.2% del total en 1T2026."
              unit="%"
            />
            <BarChartBox
              data={pemexSupportData}
              xKey="year"
              yKey="value"
              title="Apoyo fiscal a Pemex"
              description="Dato financiero clave para entender costo de oportunidad."
              unit="millones de dolares"
            />
            <ComparisonChart
              data={pisaComparisonData}
              title="PISA Mexico vs OCDE"
              description="Brecha educativa que afecta productividad y movilidad."
              unit="puntos"
            />
            <BarChartBox
              data={impunityData}
              xKey="crime"
              yKey="value"
              title="Cifra negra / impunidad"
              description="La distancia entre delito ocurrido y justicia efectiva."
              unit="%"
            />
            <HorizontalBarChart
              data={waterAvailabilityData}
              yKey="label"
              title="Agua disponible por habitante"
              description="Caida historica y proyeccion hacia 2030."
              unit="m3 anuales"
              height={300}
            />
          </div>
          <div className="row g-4 mt-1">
            <div className="col-md-4">
              <StatCard
                icon="bi-people"
                value="38.5 millones"
                label="Personas en pobreza multidimensional"
                detail="La pobreza no es solo ingreso."
              />
            </div>
            <div className="col-md-4">
              <StatCard
                icon="bi-heart-pulse"
                value="44.5 millones"
                label="Personas con carencia de acceso a salud"
                detail="Cobertura formal no garantiza atencion real."
              />
            </div>
            <div className="col-md-4">
              <StatCard
                icon="bi-map"
                value="66%"
                label="Territorio arido o semiarido"
                detail="El agua es limite ambiental, social y economico."
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Datos
