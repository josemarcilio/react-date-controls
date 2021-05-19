import getMonth from "date-fns/getMonth"
import React, { useContext } from "react"
import { LocalesContext } from "../common/LocalesContext"
import { CalendarContext } from "./CalendarContext"

export interface CalendarHeaderChildrenValue {
  date: Date
  month: number
  monthLong: string
  monthShort: string
  monthNarrow: string
}

export interface CalendarHeaderProps {
  children: (value: CalendarHeaderChildrenValue) => JSX.Element[] | JSX.Element
}

export function CalendarHeader({ children }: CalendarHeaderProps) {
  const locales = useContext(LocalesContext)
  const { month } = useContext(CalendarContext)

  const monthLong = month.toLocaleString(locales, { month: "long" })
  const monthShort = month.toLocaleString(locales, { month: "short" })
  const monthNarrow = month.toLocaleString(locales, { month: "narrow" })

  const values = {
    date: month,
    month: getMonth(month),
    monthLong,
    monthShort,
    monthNarrow,
  }

  return <>{children(values)}</>
}
