import React from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarProvider } from "./CalendarContext"
import { CalendarDate } from "./CalendarDate"
import { CalendarDates } from "./CalendarDates"
import { CalendarHeader } from "./CalendarHeader"
import { CalendarWeekday } from "./CalendarWeekday"

export type CalendarProps = {
  children: JSX.Element[] | JSX.Element
  month?: Date
  selectedDates?: Date[]
  locales?: string
}

function Calendar({
  children,
  month = new Date(),
  selectedDates = [],
  locales = "default",
}: CalendarProps) {
  return (
    <LocalesContext.Provider value={locales}>
      <CalendarProvider {...{ month, selectedDates }}>
        {children}
      </CalendarProvider>
    </LocalesContext.Provider>
  )
}

Calendar.Dates = CalendarDates
Calendar.Header = CalendarHeader
Calendar.Date = CalendarDate
Calendar.Weekday = CalendarWeekday

export { Calendar }

