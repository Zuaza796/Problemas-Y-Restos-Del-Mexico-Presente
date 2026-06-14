import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ChartCard from '../ChartCard'
import { chartColors, commonTooltipStyle } from './chartTheme'

function LineChartBox({ data, xKey, yKey, title, description, note, unit = '%' }) {
  return (
    <ChartCard title={title} description={description} note={note}>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 12, right: 14, left: 0, bottom: 8 }}>
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" />
          <XAxis dataKey={xKey} tick={{ fill: chartColors.text }} />
          <YAxis tick={{ fill: chartColors.text }} />
          <Tooltip
            contentStyle={commonTooltipStyle}
            formatter={(value) => [`${value}${unit}`, 'Valor']}
          />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={chartColors.tertiary}
            strokeWidth={3}
            dot={{ r: 5, fill: chartColors.secondary, strokeWidth: 0 }}
            activeDot={{ r: 7, fill: chartColors.primary }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export default LineChartBox
