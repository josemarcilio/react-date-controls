import getDay from "date-fns/getDay"
import React, { useContext } from "react"
import { CalendarContext } from "./CalendarContext"

export interface HeadlessCalendarDates {
  firstWeekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface CalendarDatesProps {
  children: (value: HeadlessCalendarDates) => JSX.Element[] | JSX.Element
}

export function CalendarDates({ children }: CalendarDatesProps) {
  const { dates } = useContext(CalendarContext)
  const [firstDate] = dates
  const firstWeekday = getDay(firstDate)

  const headlessValues = {
    firstWeekday,
  }

  return <>{children(headlessValues)}</>
}
