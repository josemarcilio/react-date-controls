import { useContext, useEffect } from "react"
import { CalendarContext } from "./CalendarContext"
import { CalendarActions } from "./calendarReducer"
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
    dispatch({ type: CalendarActions.SelectDate, payload: date })

  const unselectDate = (date: Date) =>
    dispatch({ type: CalendarActions.UnselectDate, payload: date })

  const selectDates = (dates: Date[]) =>
    dispatch({ type: CalendarActions.SelectDates, payload: dates })

  const clearSelectedDates = () =>
    dispatch({ type: CalendarActions.ClearSelectedDates })

  useEffect(() => {
    dispatch({
      type: CalendarActions.SelectDates,
      payload: initialSelectedDates,
    })
  }, [])

  return {
    dates,
    daysOfWeek,
    selectedDates,
    selectDate,
    unselectDate,
    selectDates,
    clearSelectedDates,
  }
}
