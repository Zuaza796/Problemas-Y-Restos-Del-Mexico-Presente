import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ChartCard from '../ChartCard'
import { chartColors, commonTooltipStyle, formatNumber } from './chartTheme'

function BarChartBox({ data, xKey, yKey, title, description, note, unit = '' }) {
  return (
    <ChartCard title={title} description={description} note={note}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 12, right: 12, left: 0, bottom: 8 }}>
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" />
          <XAxis dataKey={xKey} tick={{ fill: chartColors.text }} />
          <YAxis tick={{ fill: chartColors.text }} tickFormatter={formatNumber} />
          <Tooltip
            contentStyle={commonTooltipStyle}
            formatter={(value) => [`${formatNumber(value)}${unit ? ` ${unit}` : ''}`, 'Valor']}
          />
          <Bar dataKey={yKey} fill={chartColors.primary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export default BarChartBox
