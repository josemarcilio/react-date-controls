import { useEffect } from "react"
import type { UseCalendarDatesProps, UseCalendarDatesShape } from "./types"
import { generateDates } from "./utils/generateDates"

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
