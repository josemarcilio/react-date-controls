import {
  addDays,
  endOfMonth,
  isBefore,
  startOfDay,
  startOfMonth,
} from "date-fns"
import isEqual from "date-fns/isEqual"
import { CalendarDateShape } from "../types/useCalendarDates.types"

export function generateDates(month: Date, selectedDates: Date[]) {
  let dates: CalendarDateShape[] = []
  let cursor = startOfMonth(month)

  while (
    isBefore(cursor, endOfMonth(month)) ||
    isEqual(cursor, endOfMonth(month))
  ) {
    const isSelected = selectedDates.some((date) =>
      isEqual(startOfDay(date), startOfDay(cursor))
    )

    dates.push({ value: cursor, isSelected })
    cursor = addDays(cursor, 1)
  }

  return dates
}
