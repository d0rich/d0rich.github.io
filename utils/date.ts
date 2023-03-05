import dateFormat, { masks } from "dateformat"

export function dateToMonthYear(date: Date | string = new Date()) {
  return dateFormat(date, 'mmm yyyy')
}

export function dateToDayMonthYear(date: Date | string = new Date()) {
  return dateFormat(date, 'dd mmm yyyy')
}