import { ReactNode } from "react"

export interface UseCalendarProps {
  month: Date
  selectedDates: Date[]
}

export type UseCalendarDatesProps = {
  month: Date
  selectedDates: Date[]
}

export interface CalendarDateShape {
  value: Date
  isSelected: boolean
}

export type UseCalendarDatesShape = CalendarDateShape[]

export type CalendarProviderProps = {
  month: Date
  selectedDates: Date[]
  children: ReactNode
}

export type CalendarContextShape = {
  month: Date
  daysOfWeek: Date[]
  dates: CalendarDateShape[]
}

export type CalendarProps = {
  children: ReactNode
  month: Date
  selectedDates: Date[]
  locales?: string
}
export interface CalendarHeaderChildrenValue {
  date: Date
  month: number
  monthLong: string
  monthShort: string
  monthNarrow: string
}

export interface CalendarHeaderProps {
  children: (value: CalendarHeaderChildrenValue) => ReactNode
}

export interface CalendarDateChildrenValue {
  date: CalendarDateShape
  dayOfMonth: number
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface CalendarDateProps {
  children: (value: CalendarDateChildrenValue) => ReactNode
}

export interface CalendarWeekdayChildrenValue {
  date: Date
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6
  long: string
  short: string
  narrow: string
}

export interface CalendarWeekdayProps {
  children: (value: CalendarWeekdayChildrenValue) => ReactNode
}
