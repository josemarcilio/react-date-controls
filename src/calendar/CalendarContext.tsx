import React, { createContext } from "react"
import { useCalendarDates } from "./useCalendarDates"
import { useCalendarHeader } from "./useCalendarHeader"

export type CalendarContextShape = {
  month: Date
  daysOfWeek: Date[]
  dates: Date[]
}

export type CalendarProviderProps = {
  month: Date
  selectedDates: Date[]
  children: JSX.Element[] | JSX.Element
}

const CalendarContext = createContext<CalendarContextShape>({
  dates: [],
  daysOfWeek: [],
  month: new Date(),
})

const { Provider } = CalendarContext

function CalendarProvider({ children, month }: CalendarProviderProps) {
  const daysOfWeek = useCalendarHeader()
  const dates = useCalendarDates({ month })

  return <Provider value={{ month, daysOfWeek, dates }}>{children}</Provider>
}

export { CalendarContext, CalendarProvider }
