import { CalendarDateShape } from "./useCalendarDates.types"

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
