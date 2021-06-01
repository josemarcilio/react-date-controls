import { useEffect } from "react"
import { generateDates } from "./utils/generateDates"

export type UseCalendarDatesProps = {
  month: Date
}

export function useCalendarDates(props: UseCalendarDatesProps): Date[] {
  const { month } = props
  let dates = generateDates(month)

  useEffect(() => {
    dates = generateDates(month)
  }, [month])

  return dates
}
