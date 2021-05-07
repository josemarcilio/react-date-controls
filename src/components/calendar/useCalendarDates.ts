import {
  addDays,
  endOfMonth,
  isBefore,
  isEqual,
  startOfDay,
  startOfMonth,
} from "date-fns"
import { useEffect } from "react"

export type CalendarDate = {
  value: Date
  isSelected: boolean
}

function generateDates(month: Date, selectedDates: Date[]) {
  let dates: CalendarDate[] = []
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

type UseCalendarDatesProps = {
  month: Date
  selectedDates: Date[]
}

export function useCalendarDates(props: UseCalendarDatesProps): CalendarDate[] {
  const { month, selectedDates } = props
  let dates = generateDates(month, selectedDates)

  useEffect(() => {
    dates = generateDates(month, selectedDates)
  }, [month, selectedDates])

  return dates
}
