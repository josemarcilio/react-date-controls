import React, { ReactNode } from "react"
import { CalendarProvider } from "./CalendarContext"
import { useCalendar, UseCalendarResult } from "./useCalendar"

export type CalendarProps = {
  initialMonth: Date
  initialSelectedDates: Date[]
  children: (props: UseCalendarResult) => ReactNode
}

export function Calendar({
  initialMonth,
  initialSelectedDates,
  children,
}: CalendarProps) {
  const calendar = useCalendar({
    initialMonth,
    initialSelectedDates,
  })

  return <CalendarProvider>{children(calendar)}</CalendarProvider>
}
