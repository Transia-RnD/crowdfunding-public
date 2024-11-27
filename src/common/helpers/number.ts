import numeral from 'numeral'

// ----------------------------------------------------------------------

export function formatLargeNumber(value: number) {
  if (value == 0) {
    return '0'
  }
  return value >= 10 ** 4 ? Math.floor(value / 1000) + 'k' : value
}

export function fCurrency(number: string | number) {
  return numeral(number).format('$0,0')
}

export function fPercent(number: number) {
  return numeral(number / 100).format('0.0%')
}

export function fNumber(number: string | number) {
  return numeral(number).format()
}

export function fShortenNumber(number: string | number) {
  return numeral(number).format('0.00a').replace('.00', '')
}

export function fData(number: string | number) {
  return numeral(number).format('0.0 b')
}
