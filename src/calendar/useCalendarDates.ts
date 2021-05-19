import { useEffect } from "react"
import { generateDates } from "./utils/generateDates"

export interface CalendarDateShape {
  value: Date
  isSelected: boolean
}

export type UseCalendarDatesProps = {
  month: Date
  selectedDates: Date[]
}

export type UseCalendarDatesShape = CalendarDateShape[]

export function useCalendarDates(
  props: UseCalendarDatesProps
): UseCalendarDatesShape {
  const { month, selectedDates } = props
  let dates = generateDates(month, selectedDates)

  useEffect(() => {
    dates = generateDates(month, selectedDates)
  }, [month, selectedDates])

  return dates
}
