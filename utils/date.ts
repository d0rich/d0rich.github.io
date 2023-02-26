import dateFormat, { masks } from "dateformat"

export function dateToMonthYear(date: Date = new Date()) {
  return dateFormat(date, 'mmm yyyy')
}

export function dateToDayMonthYear(date: Date = new Date()) {
  return dateFormat(date, 'dd mmm yyyy')
}