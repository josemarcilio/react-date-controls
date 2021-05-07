export type UseCalendarDatesProps = {
  month: Date
  selectedDates: Date[]
}

export interface CalendarDateShape {
  value: Date
  isSelected: boolean
}

export type UseCalendarDatesShape = CalendarDateShape[]
