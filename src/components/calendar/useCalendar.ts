import { useEffect, useReducer } from "react"
import calendarReducer from "./calendarReducer"
import type { UseCalendarProps, UseCalendarShape } from "./types"
import { CalendarActions } from "./types"
import { useCalendarDates } from "./useCalendarDates"
import { useCalendarHeader } from "./useCalendarHeader"
import { filterDatesByMonth } from "./utils/filterDatesByMonth"

const initialSelectedDates: Date[] = []

export const initialState = {
  selectedDates: initialSelectedDates,
}

export function useCalendar({
  initialMonth: month,
  initialSelectedDates,
}: UseCalendarProps): UseCalendarShape {
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  const { selectedDates } = state

  const { daysOfWeek } = useCalendarHeader()

  const dates = useCalendarDates({ month, selectedDates })

  const selectDate = (date: Date) => {
    const [filtered] = filterDatesByMonth([date], month)
    dispatch({ type: CalendarActions.SelectDate, payload: filtered })
  }

  const unselectDate = (date: Date) =>
    dispatch({ type: CalendarActions.UnselectDate, payload: date })

  const selectDates = (dates: Date[]) => {
    const filtered = filterDatesByMonth(dates, month)
    dispatch({ type: CalendarActions.SelectDates, payload: filtered })
  }

  const clearSelectedDates = () =>
    dispatch({ type: CalendarActions.ClearSelectedDates })

  useEffect(() => {
    selectDates(filterDatesByMonth(initialSelectedDates, month))
  }, [month, initialSelectedDates])

  return {
    month,
    dates,
    daysOfWeek,
    selectedDates,
    selectDate,
    unselectDate,
    selectDates,
    clearSelectedDates,
  }
}
