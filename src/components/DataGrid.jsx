import { keyStats } from '../data/keyStats'
import DataCard from './DataCard'
import SectionIntro from './SectionIntro'

function DataGrid() {
  return (
    <section id="datos-clave" className="section-block data-section">
      <div className="container">
        <SectionIntro
          eyebrow="Datos clave"
          title="Cifras para dimensionar los retos"
          summary="Una selección de indicadores presentes en el documento base para leer economía, sociedad, educación, agua y salud con mayor claridad."
        />
        <div className="row g-4">
          {keyStats.map((stat) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={`${stat.value}-${stat.label}`}>
              <DataCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DataGrid
