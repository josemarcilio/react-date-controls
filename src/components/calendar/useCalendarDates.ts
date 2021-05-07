import { useEffect } from "react"
import type { UseCalendarDatesProps, UseCalendarDatesShape } from "./types"
import { filterDatesByMonth } from "./utils/filterDatesByMonth"
import { generateDates } from "./utils/generateDates"

export function useCalendarDates(
  props: UseCalendarDatesProps
): UseCalendarDatesShape {
  const { month, selectedDates } = props
  let dates = generateDates(month, filterDatesByMonth(selectedDates, month))

  useEffect(() => {
    dates = generateDates(month, filterDatesByMonth(selectedDates, month))
  }, [month, selectedDates])

  return dates
}
