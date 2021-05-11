import React, { createContext } from "react"
import type { CalendarContextShape, CalendarProviderProps } from "./types"
import { useCalendarDates } from "./useCalendarDates"
import { useCalendarHeader } from "./useCalendarHeader"

const initialCalendar: CalendarContextShape = {
  dates: [],
  daysOfWeek: [],
  month: new Date(),
}

const CalendarContext = createContext<CalendarContextShape>(initialCalendar)

const { Provider } = CalendarContext

function CalendarProvider({
  children,
  month,
  selectedDates,
}: CalendarProviderProps) {
  const { daysOfWeek } = useCalendarHeader()

  const dates = useCalendarDates({ month, selectedDates })

  return <Provider value={{ month, daysOfWeek, dates }}>{children}</Provider>
}

export { CalendarContext, CalendarProvider }
