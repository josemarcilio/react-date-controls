import React, { createContext } from "react"
import type {
  CalendarProviderProps,
  CalendarStoreShape,
  UseCalendarShape,
} from "./types"
import { useCalendar } from "./useCalendar"

const initialCalendar: UseCalendarShape = {
  dates: [],
  daysOfWeek: [],
  selectedDates: [],
  month: new Date(),
  selectDate: () => {},
  selectDates: () => {},
  unselectDate: () => {},
  clearSelectedDates: () => {},
}

const CalendarContext = createContext<CalendarStoreShape>({
  calendar: initialCalendar,
})

const { Provider } = CalendarContext

function CalendarProvider({
  children,
  initialMonth,
  initialSelectedDates,
}: CalendarProviderProps) {
  const calendar = useCalendar({
    initialMonth,
    initialSelectedDates,
  })

  return <Provider value={{ calendar }}>{children}</Provider>
}

export { CalendarContext, CalendarProvider }
