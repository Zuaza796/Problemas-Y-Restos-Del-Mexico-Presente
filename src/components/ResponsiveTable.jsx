function ResponsiveTable({ table, title }) {
  if (!table) return null

  return (
    <article className="table-panel reveal">
      {title ? <h3>{title}</h3> : null}
      <div className="table-responsive editorial-table-wrap">
        <table className="table editorial-table align-middle">
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default ResponsiveTable
