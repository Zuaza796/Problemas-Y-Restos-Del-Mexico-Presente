import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import ChartCard from '../ChartCard'
import { chartColors, commonTooltipStyle } from './chartTheme'

const pieColors = [chartColors.primary, chartColors.secondary, chartColors.tertiary, '#747873']

function PieChartBox({ data, nameKey = 'label', valueKey = 'value', title, description, note }) {
  return (
    <ChartCard title={title} description={description} note={note}>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie data={data} dataKey={valueKey} nameKey={nameKey} outerRadius={88} label>
            {data.map((entry, index) => (
              <Cell key={entry[nameKey]} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={commonTooltipStyle} formatter={(value) => [`${value}%`, 'Valor']} />
          <Legend wrapperStyle={{ color: chartColors.text }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export default PieChartBox
