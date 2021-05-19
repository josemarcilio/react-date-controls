import { getDate, getDay } from "date-fns"
import React, { useContext } from "react"
import { CalendarContext } from "./CalendarContext"
import { CalendarDateShape } from "./useCalendarDates"

export interface CalendarDateChildrenValue {
  date: CalendarDateShape
  dayOfMonth: number
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface CalendarDateProps {
  children: (value: CalendarDateChildrenValue) => JSX.Element[] | JSX.Element
}

export function CalendarDate({ children }: CalendarDateProps) {
  const { dates } = useContext(CalendarContext)

  return (
    <>
      {dates.map((date, key) => {
        const dayOfMonth = getDate(date.value)
        const weekday = getDay(date.value)

        const childrenValue = {
          date,
          dayOfMonth,
          weekday,
        }

        return (
          <React.Fragment key={key}>{children(childrenValue)}</React.Fragment>
        )
      })}
    </>
  )
}
