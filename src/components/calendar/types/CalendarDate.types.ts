import { ReactNode } from "react"
import { CalendarDateShape } from "./useCalendarDates.types"

export interface CalendarDateChildrenValue {
  dayOfMonth: number
  weekday: number
  weekdayLong: string
  weekdayShort: string
  weekdayNarrow: string
}

export interface CalendarDateProps {
  children: (value: CalendarDateChildrenValue) => ReactNode
  date: CalendarDateShape
}
