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
  children: JSX.Element[] | JSX.Element
}

export type CalendarContextShape = {
  month: Date
  daysOfWeek: Date[]
  dates: CalendarDateShape[]
}

export type CalendarProps = {
  children: JSX.Element[] | JSX.Element
  month: Date
  selectedDates: Date[]
  locales?: string
}

export interface CalendarDatesProps {
  children: (value: CalendarDatesChildrenValue) => JSX.Element[] | JSX.Element
}

export interface CalendarDatesChildrenValue {
  firstWeekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface CalendarHeaderChildrenValue {
  date: Date
  month: number
  monthLong: string
  monthShort: string
  monthNarrow: string
}

export interface CalendarHeaderProps {
  children: (value: CalendarHeaderChildrenValue) => JSX.Element[] | JSX.Element
}

export interface CalendarDateChildrenValue {
  date: CalendarDateShape
  dayOfMonth: number
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface CalendarDateProps {
  children: (value: CalendarDateChildrenValue) => JSX.Element[] | JSX.Element
}

export interface CalendarWeekdayChildrenValue {
  date: Date
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6
  long: string
  short: string
  narrow: string
}

export interface CalendarWeekdayProps {
  children: (value: CalendarWeekdayChildrenValue) => JSX.Element[] | JSX.Element
}
