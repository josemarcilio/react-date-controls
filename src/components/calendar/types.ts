import { Dispatch, ReactNode } from "react"

export interface UseCalendarProps {
  initialMonth: Date
  initialSelectedDates: Date[]
  onSelectDate?: (selecteDate: Date) => void
}

export interface UseCalendarShape {
  month: Date
  dates: CalendarDateShape[]
  daysOfWeek: number[]
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
  children: ReactNode
}

export type CalendarStoreShape = {
  state: CalendarStateShape
  dispatch: Dispatch<CalendarActionShape>
}

export type CalendarProps = {
  children: (value: CalendarChildrenShape) => ReactNode
  initialMonth: Date
  initialSelectedDates: Date[]
  locales?: string
}

export type CalendarChildrenShape = UseCalendarShape & {
  monthName: string
}

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
