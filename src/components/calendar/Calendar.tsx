import React from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarProvider } from "./CalendarContext"
import { CalendarDate } from "./CalendarDate"
import { CalendarWeekday } from "./CalendarWeekday"
import type { CalendarProps } from "./types"

function Calendar({
  children,
  initialMonth,
  initialSelectedDates,
  locales = "default",
}: CalendarProps) {
  // const monthName = calendar.month.toLocaleString(locales, { month: "long" })

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

Calendar.Date = CalendarDate
Calendar.Weekday = CalendarWeekday

export { Calendar }
