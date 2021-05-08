import { getDay } from "date-fns"
import React, { useContext } from "react"
import { LocalesContext } from "../common/LocalesContext"
import type { CalendarWeekdayProps } from "./types"

export function CalendarWeekday({ children, date }: CalendarWeekdayProps) {
  const locales = useContext(LocalesContext)

  const day = getDay(date)
  const long = date.toLocaleString(locales, { weekday: "long" })
  const short = date.toLocaleString(locales, { weekday: "short" })
  const narrow = date.toLocaleString(locales, {
    weekday: "narrow",
  })

  const childrenValue = {
    day,
    long,
    short,
    narrow,
  }

  return <>{children(childrenValue)}</>
}
