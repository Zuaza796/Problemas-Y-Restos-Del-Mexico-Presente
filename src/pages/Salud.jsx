import StatCard from '../components/StatCard'
import TopicPageScaffold from '../components/TopicPageScaffold'
import { topics } from '../data/topics'

function Salud() {
  return (
    <TopicPageScaffold
      topic={topics.salud}
      dataCards={
        <>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-cash-coin"
              value="1,588 USD"
              label="Gasto por persona en salud en Mexico"
              detail="Promedio OCDE: 5,967 USD."
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-person-vcard"
              value="2.7"
              label="Medicos por cada mil habitantes"
              detail="Promedio OCDE: 3.9."
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-hospital"
              value="1.0"
              label="Cama hospitalaria por cada mil habitantes"
              detail="Promedio OCDE: 4.2."
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <StatCard
              icon="bi-clipboard2-pulse"
              value="44.5 millones"
              label="Personas con carencia por acceso a salud"
              detail="Dato de INEGI sobre carencia por acceso a salud."
            />
          </div>
        </>
      }
    />
  )
}

export default Salud
