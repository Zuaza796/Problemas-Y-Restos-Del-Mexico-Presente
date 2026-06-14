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

function HorizontalBarChart({
  data,
  xKey = 'value',
  yKey = 'label',
  title,
  description,
  note,
  unit = '',
  height = 320,
}) {
  return (
    <ChartCard title={title} description={description} note={note}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 12, right: 18, left: 28, bottom: 8 }}
        >
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fill: chartColors.text }} tickFormatter={formatNumber} />
          <YAxis
            dataKey={yKey}
            type="category"
            width={150}
            tick={{ fill: chartColors.text, fontSize: 12 }}
          />
          <Tooltip
            contentStyle={commonTooltipStyle}
            formatter={(value) => [`${formatNumber(value)}${unit ? ` ${unit}` : ''}`, 'Valor']}
          />
          <Bar dataKey={xKey} fill={chartColors.tertiary} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export default HorizontalBarChart
