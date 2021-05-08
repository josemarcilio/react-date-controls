import { getDate, getDay } from "date-fns"
import React from "react"
import type { CalendarDateProps } from "./types"

export function CalendarDate({ children, date }: CalendarDateProps) {
  const dayOfMonth = getDate(date.value)
  const weekday = getDay(date.value)

  const childrenValue = {
    ...date,
    dayOfMonth,
    weekday,
  }

  return <>{children(childrenValue)}</>
}
