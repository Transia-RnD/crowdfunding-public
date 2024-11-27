import { format, getTime, formatDistanceToNow } from 'date-fns'

export function fTStamp(timeInterval: number) {
  return fDateTime(new Date(timeInterval))
}

export function fDate(date: Date) {
  if (!date) {
    return null
  }
  return format(new Date(date), 'dd MMMM yyyy')
}

export function fDateTime(date: Date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export function fTimestamp(date: Date) {
  return getTime(new Date(date))
}

export function fDateTimeSuffix(date: Date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export function fDateFromNow(date: Date, addSuffix?: boolean | false) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: addSuffix,
  })
}
