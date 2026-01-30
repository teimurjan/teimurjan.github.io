import { format as dateFnsFormat, differenceInDays } from 'date-fns'

export const PRETTY_DATE_FORMAT = 'MMM yyyy'
export const YEAR_DATE_FORMAT = 'yyyy'

export const prettyDate = (date: string, format = PRETTY_DATE_FORMAT) => {
  try {
    return dateFnsFormat(new Date(date), format)
  } catch (error) {
    console.warn(error)
    return undefined
  }
}

export const prettyRange = (startDate: string, endDate?: string, format = PRETTY_DATE_FORMAT) => {
  if (!endDate || endDate.includes('null') || endDate.includes('undefined')) {
    return `${prettyDate(startDate, format)} - Now`
  }

  return `${prettyDate(startDate, format)} - ${prettyDate(endDate, format)}`
}

export const dateSorter = (a: string, b: string) => {
  return -differenceInDays(new Date(a), new Date(b))
}
