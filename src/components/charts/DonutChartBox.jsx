import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import ChartCard from '../ChartCard'
import { chartColors, commonTooltipStyle } from './chartTheme'

const donutColors = [chartColors.primary, chartColors.secondary, chartColors.tertiary, '#747873']

function DonutChartBox({ data, nameKey = 'label', valueKey = 'value', title, description, note }) {
  return (
    <ChartCard title={title} description={description} note={note}>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey={valueKey}
            nameKey={nameKey}
            innerRadius={58}
            outerRadius={92}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={entry[nameKey]} fill={donutColors[index % donutColors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={commonTooltipStyle} formatter={(value) => [`${value}%`, 'Valor']} />
          <Legend wrapperStyle={{ color: chartColors.text }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export default DonutChartBox
