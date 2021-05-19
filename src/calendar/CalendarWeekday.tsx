import { getDay } from "date-fns"
import React, { useContext } from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarContext } from "./CalendarContext"

export interface CalendarWeekdayChildrenValue {
  date: Date
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6
  long: string
  short: string
  narrow: string
}

export interface CalendarWeekdayProps {
  children: (value: CalendarWeekdayChildrenValue) => JSX.Element[] | JSX.Element
}

export function CalendarWeekday({ children }: CalendarWeekdayProps) {
  const locales = useContext(LocalesContext)
  const { daysOfWeek } = useContext(CalendarContext)

  return (
    <>
      {daysOfWeek.map((date, key) => {
        const day = getDay(date)
        const long = date.toLocaleString(locales, { weekday: "long" })
        const short = date.toLocaleString(locales, { weekday: "short" })
        const narrow = date.toLocaleString(locales, {
          weekday: "narrow",
        })

        const childrenValue = {
          date,
          day,
          long,
          short,
          narrow,
        }

        return (
          <React.Fragment key={key}>{children(childrenValue)}</React.Fragment>
        )
      })}
    </>
  )
}
