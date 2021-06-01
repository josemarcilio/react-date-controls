import { getDate, getDay } from "date-fns"
import React, { useContext } from "react"
import { CalendarContext } from "./CalendarContext"

export interface HeadlessCalendarDate {
  date: Date
  dayOfMonth: number
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface CalendarDateProps {
  children: (value: HeadlessCalendarDate) => JSX.Element[] | JSX.Element
}

export function CalendarDate({ children }: CalendarDateProps) {
  const { dates } = useContext(CalendarContext)

  return (
    <>
      {dates.map((date, key) => {
        const dayOfMonth = getDate(date)
        const weekday = getDay(date)

        const headlessValues = {
          date,
          dayOfMonth,
          weekday,
        }

        return (
          <React.Fragment key={key}>{children(headlessValues)}</React.Fragment>
        )
      })}
    </>
  )
}
