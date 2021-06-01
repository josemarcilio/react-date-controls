import { addDays, endOfMonth, isBefore, startOfMonth } from "date-fns"
import isEqual from "date-fns/isEqual"

export function generateDates(month: Date): Date[] {
  let dates: Date[] = []
  let cursor = startOfMonth(month)

  while (
    isBefore(cursor, endOfMonth(month)) ||
    isEqual(cursor, endOfMonth(month))
  ) {
    dates.push(cursor)
    cursor = addDays(cursor, 1)
  }

  return dates
}
