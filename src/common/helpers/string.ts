export function truncate(input: string) {
  return input.length > 20 ? `${input.substring(0, 20)}...` : input
}

export function capitalize(item: string) {
  if (!item) {
    return null
  }
  return item.charAt(0).toUpperCase() + item.slice(1)
}

export function abbrv(address: string) {
  if (!address) {
    return 'N/A'
  }
  const firstAbbrv = address.slice(0, 10)
  const lastAbbrv = address.slice(-8)
  return `${firstAbbrv}....${lastAbbrv}`
}
