import { getDay } from "date-fns"
import React, { useContext } from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarContext } from "./CalendarContext"
import type { CalendarWeekdayProps } from "./types"

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
