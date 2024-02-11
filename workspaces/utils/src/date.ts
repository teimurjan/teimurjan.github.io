import { differenceInDays, format as dateFnsFormat, parseISO } from 'date-fns'

export const PRETTY_DATE_FORMAT = 'MMM yyyy'
export const YEAR_DATE_FORMAT = 'yyyy'

export const prettyDate = (date: string, format = PRETTY_DATE_FORMAT) => {
  return dateFnsFormat(parseISO(date), format)
}

export const prettyRange = (
  startDate: string,
  endDate?: string,
  format = PRETTY_DATE_FORMAT
) => {
  return `${prettyDate(startDate, format)} - ${
    endDate ? prettyDate(endDate, format) : 'Now'
  }`
}

export const sortByDate = <T extends { date: string }>(array: T[]) => {
  return array.sort(
    (a, b) => -differenceInDays(parseISO(a.date), parseISO(b.date))
  )
}
