import getMonth from "date-fns/getMonth"

export function filterDatesByMonth(dates: Date[], month: Date) {
  return dates.filter((date) => getMonth(date) === getMonth(month))
}
