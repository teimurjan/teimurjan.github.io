import { differenceInDays, format as dateFnsFormat } from 'date-fns'

export const PRETTY_DATE_FORMAT = 'MMM yyyy'
export const YEAR_DATE_FORMAT = 'yyyy'

export const prettyDate = (date: string, format = PRETTY_DATE_FORMAT) => {
  return dateFnsFormat(new Date(date), format)
}

export const prettyRange = (
  startDate: string,
  endDate?: string,
  format = PRETTY_DATE_FORMAT,
) => {
  return `${prettyDate(startDate, format)} - ${
    endDate ? prettyDate(endDate, format) : 'Now'
  }`
}

export const dateSorter = (a: string, b: string) => {
  return -differenceInDays(new Date(a), new Date(b))
}
