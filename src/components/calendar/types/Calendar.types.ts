import { ReactNode } from "react"
import { UseCalendarShape } from "./useCalendar.types"

export type CalendarProps = {
  children: (value: CalendarChildrenShape) => ReactNode
  initialMonth: Date
  initialSelectedDates: Date[]
  locales?: string
}

export type CalendarChildrenShape = UseCalendarShape & {
  monthName: string
}
