export const chartColors = {
  primary: '#18241b',
  secondary: '#904b36',
  tertiary: '#2c3749',
  grid: '#c3c8c2',
  text: '#434843',
  surface: '#faf9f7',
}

export const commonTooltipStyle = {
  backgroundColor: '#faf9f7',
  border: '1px solid #c3c8c2',
  borderRadius: 4,
  color: '#1a1c1b',
}

export function formatNumber(value) {
  return new Intl.NumberFormat('es-MX').format(value)
}
