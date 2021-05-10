import { ReactNode } from "react"

export interface UseCalendarProps {
  initialMonth: Date
  initialSelectedDates: Date[]
  onSelectDate?: (selecteDate: Date) => void
}

export interface UseCalendarShape {
  month: Date
  dates: CalendarDateShape[]
  daysOfWeek: Date[]
  selectedDates: Date[]
  selectDate: (date: Date) => void
  unselectDate: (date: Date) => void
  selectDates: (date: Date[]) => void
  clearSelectedDates: () => void
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

export enum CalendarActions {
  SelectDate,
  UnselectDate,
  SelectDates,
  ClearSelectedDates,
}

export type CalendarStateShape = {
  selectedDates: Date[]
}

export type CalendarActionShape =
  | {
      type: CalendarActions.SelectDate
      payload: Date
    }
  | {
      type: CalendarActions.UnselectDate
      payload: Date
    }
  | {
      type: CalendarActions.SelectDates
      payload: Date[]
    }
  | {
      type: CalendarActions.ClearSelectedDates
    }

export type CalendarProviderProps = {
  initialMonth: Date
  initialSelectedDates: Date[]
  children: ReactNode
}

export type CalendarStoreShape = {
  calendar: UseCalendarShape
}

export type CalendarProps = {
  children: ReactNode
  initialMonth: Date
  initialSelectedDates: Date[]
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
