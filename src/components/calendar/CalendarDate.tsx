import { getDate, getDay } from "date-fns"
import React, { useContext } from "react"
import { CalendarContext } from "./CalendarContext"
import type { CalendarDateProps } from "./types"

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
