import React from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarProvider } from "./CalendarContext"
import { CalendarDate } from "./CalendarDate"
import { CalendarHeader } from "./CalendarHeader"
import { CalendarWeekday } from "./CalendarWeekday"
import type { CalendarProps } from "./types"

function Calendar({
  children,
  initialMonth,
  initialSelectedDates,
  locales = "default",
}: CalendarProps) {
  return (
    <LocalesContext.Provider value={locales}>
      <CalendarProvider
        initialMonth={initialMonth}
        initialSelectedDates={initialSelectedDates}
      >
        {children}
      </CalendarProvider>
    </LocalesContext.Provider>
  )
}

Calendar.Header = CalendarHeader
Calendar.Date = CalendarDate
Calendar.Weekday = CalendarWeekday

export { Calendar }
