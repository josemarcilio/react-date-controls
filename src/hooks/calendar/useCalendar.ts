import { useContext, useEffect } from "react"
import { CalendarContext } from "./CalendarContext"
import { useCalendarDates } from "./useCalendarDates"
import { useCalendarHeader } from "./useCalendarHeader"

export type UseCalendarProps = {
  month: Date
  initialSelectedDates: Date[]
  onSelectDate?: (selecteDate: Date) => void
}

export function useCalendar(props: UseCalendarProps) {
  const { month, initialSelectedDates } = props
  const { state, dispatch } = useContext(CalendarContext)

  const { selectedDates } = state

  const { daysOfWeek } = useCalendarHeader()

  const dates = useCalendarDates({ month, selectedDates })

  const selectDate = (date: Date) =>
    dispatch({ type: "SelectDate", payload: date })

  const unselectDate = (date: Date) =>
    dispatch({ type: "UnselectDate", payload: date })

  const selectDates = (dates: Date[]) =>
    dispatch({ type: "SelectDates", payload: dates })

  useEffect(() => {
    dispatch({ type: "SelectDates", payload: initialSelectedDates })
  }, [])

  return {
    dates,
    daysOfWeek,
    selectedDates,
    selectDate,
    unselectDate,
    selectDates,
  }
}
