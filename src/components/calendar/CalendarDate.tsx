import { getDate, getDay } from "date-fns"
import React, { useContext } from "react"
import { LocalesContext } from "../common/LocalesContext"
import type { CalendarDateProps } from "./types/CalendarDate.types"

export function CalendarDate({ children, date }: CalendarDateProps) {
  const locales = useContext(LocalesContext)

  const dayOfMonth = getDate(date.value)
  const weekday = getDay(date.value)
  const weekdayLong = date.value.toLocaleString(locales, { weekday: "long" })
  const weekdayShort = date.value.toLocaleString(locales, { weekday: "short" })
  const weekdayNarrow = date.value.toLocaleString(locales, {
    weekday: "narrow",
  })

  const childrenValue = {
    ...date,
    dayOfMonth,
    weekday,
    weekdayLong,
    weekdayShort,
    weekdayNarrow,
  }

  return <>{children(childrenValue)}</>
}
