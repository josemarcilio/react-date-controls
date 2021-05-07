import React, { ReactNode } from "react"
import { CalendarProvider } from "./CalendarContext"
import { useCalendar, UseCalendarType } from "./useCalendar"

export type CalendarType = UseCalendarType & {
  monthName: string
}

export type CalendarProps = {
  children: (props: CalendarType) => ReactNode
  initialMonth: Date
  initialSelectedDates: Date[]
  locales?: string
}

export function Calendar({
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
