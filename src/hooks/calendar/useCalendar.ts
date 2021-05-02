import {
  addDays,
  endOfMonth,
  getMonth,
  isSameDay,
  startOfMonth,
} from "date-fns"

function useCalendarHeader() {
  const daysOfWeek = Array(7).keys()

  return { daysOfWeek }
}

type UseCalendarDatesProps = {
  month: number
  selectedDates: Date[]
}

type CalendarDate = {
  value: Date
  isSelected: boolean
}

function useCalendarDates(props: UseCalendarDatesProps): CalendarDate[] {
  const { month, selectedDates } = props
  const dates: CalendarDate[] = []

  let cursor = startOfMonth(month)

  while (isSameDay(cursor, endOfMonth(month))) {
    const isSelected = selectedDates.some((date) => isSameDay(date, cursor))

    dates.push({ value: cursor, isSelected })
    cursor = addDays(cursor, 1)
  }

  return dates
}

export type UseCalendarProps = {
  month: Date
  selectedDates: Date[]
  onSelectDate?: (selecteDate: Date) => void
}

export function useCalendar(props: UseCalendarProps) {
  const { month, selectedDates } = props

  const { daysOfWeek } = useCalendarHeader()
  const dates = useCalendarDates({ month: getMonth(month), selectedDates })

  return { daysOfWeek, dates }
}
