import React from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarProvider } from "./CalendarContext"
import { CalendarDate } from "./CalendarDate"
import { CalendarWeekday } from "./CalendarWeekday"
import type { CalendarProps } from "./types"
import { useCalendar } from "./useCalendar"

function Calendar({
  children,
  initialMonth,
  initialSelectedDates,
  locales = "default",
}: CalendarProps) {
  const calendar = useCalendar({
    initialMonth,
    initialSelectedDates,
  })

  const monthName = calendar.month.toLocaleString(locales, { month: "long" })

  const childrenValue = { ...calendar, monthName }

  return (
    <LocalesContext.Provider value={locales}>
      <CalendarProvider>{children(childrenValue)}</CalendarProvider>
    </LocalesContext.Provider>
  )
}

Calendar.Date = CalendarDate
Calendar.Weekday = CalendarWeekday

export { Calendar }
