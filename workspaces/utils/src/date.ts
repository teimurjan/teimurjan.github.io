import { differenceInDays, format, parseISO } from 'date-fns'

const DATE_FORMAT = 'MMM yyyy'

export const prettyDate = (date: string) => {
  return format(parseISO(date), DATE_FORMAT)
}

export const prettyRange = (startDate: string, endDate?: string) => {
  return `${prettyDate(startDate)} - ${endDate ? prettyDate(endDate) : 'Now'}`
}

export const sortByDate = <T extends { date: string }>(array: T[]) => {
  return array.sort(
    (a, b) => -differenceInDays(parseISO(a.date), parseISO(b.date))
  )
}
