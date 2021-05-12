import getDay from "date-fns/getDay"
import React, { useContext } from "react"
import { CalendarContext } from "./CalendarContext"
import type { CalendarDatesProps } from "./types"

export function CalendarDates({ children }: CalendarDatesProps) {
  const { dates } = useContext(CalendarContext)
  const [firstDate] = dates
  const firstWeekday = getDay(firstDate.value)

  const values = {
    firstWeekday,
  }

  return <>{children(values)}</>
}
