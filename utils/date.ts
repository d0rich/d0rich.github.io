import dateFormat, { masks } from "dateformat"

export function dateToMonthYear(date: Date = new Date()) {
  return dateFormat(date, 'mmm yyyy')
}