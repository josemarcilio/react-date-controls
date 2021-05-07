import { getDate, getDay } from "date-fns"
import React, { ReactNode } from "react"
import { CalendarProvider } from "./CalendarContext"
import type { UseCalendarType } from "./useCalendar"
import { useCalendar } from "./useCalendar"
import type { CalendarDate } from "./useCalendarDates"

export type CalendarType = UseCalendarType & {
  monthName: string
}

export type CalendarProps = {
  children: (value: CalendarType) => ReactNode
  initialMonth: Date
  initialSelectedDates: Date[]
  locales?: string
}

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

  const args = { ...calendar, monthName }

  return <CalendarProvider>{children(args)}</CalendarProvider>
}

export type CalendarDateType = CalendarDate & {
  dayOfMonth: number
  weekday: number
  weekdayLong: string
  weekdayShort: string
  weekdayNarrow: string
}

export type CalendarDateProps = {
  children: (value: CalendarDateType) => ReactNode
  date: CalendarDate
  locales?: string
}

Calendar.Date = function ({
  children,
  date,
  locales = "default",
}: CalendarDateProps) {
  const dayOfMonth = getDate(date.value)
  const weekday = getDay(date.value)
  const weekdayLong = date.value.toLocaleString(locales, { weekday: "long" })
  const weekdayShort = date.value.toLocaleString(locales, { weekday: "short" })
  const weekdayNarrow = date.value.toLocaleString(locales, {
    weekday: "narrow",
  })

  return (
    <>
      {children({
        ...date,
        dayOfMonth,
        weekday,
        weekdayLong,
        weekdayShort,
        weekdayNarrow,
      })}
    </>
  )
}

export { Calendar }
