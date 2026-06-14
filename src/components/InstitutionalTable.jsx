function InstitutionalTable({ items = [] }) {
  if (!items.length) return null

  return (
    <article className="table-panel reveal">
      <h3>Organismos, funciones y riesgos</h3>
      <div className="table-responsive editorial-table-wrap">
        <table className="table editorial-table align-middle">
          <thead>
            <tr>
              <th scope="col">Organismo</th>
              <th scope="col">Funcion</th>
              <th scope="col">Que se pierde o debilita</th>
              <th scope="col">Tema afectado</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.function}</td>
                <td>{item.risk}</td>
                <td>{item.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default InstitutionalTable
