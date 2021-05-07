import { getMonth } from "date-fns"
import { useContext, useEffect, useState } from "react"
import { CalendarContext } from "./CalendarContext"
import { CalendarActions } from "./calendarReducer"
import { CalendarDate, useCalendarDates } from "./useCalendarDates"
import { useCalendarHeader } from "./useCalendarHeader"

export type UseCalendarProps = {
  initialMonth: Date
  initialSelectedDates: Date[]
  onSelectDate?: (selecteDate: Date) => void
}

export type UseCalendarResult = {
  month: Date
  dates: CalendarDate[]
  daysOfWeek: number[]
  selectedDates: Date[]
  selectDate: (date: Date) => void
  unselectDate: (date: Date) => void
  selectDates: (date: Date[]) => void
  clearSelectedDates: () => void
}

export function useCalendar(props: UseCalendarProps): UseCalendarResult {
  const { initialMonth, initialSelectedDates } = props
  const [month] = useState(initialMonth)
  const { state, dispatch } = useContext(CalendarContext)

  const { selectedDates } = state

  const { daysOfWeek } = useCalendarHeader()

  const dates = useCalendarDates({ month, selectedDates })

  const filter = (dates: Date[]) => {
    return dates.filter((date) => getMonth(date) === getMonth(month))
  }

  const selectDate = (date: Date) => {
    const [filtered] = filter([date])
    dispatch({ type: CalendarActions.SelectDate, payload: filtered })
  }

  const unselectDate = (date: Date) =>
    dispatch({ type: CalendarActions.UnselectDate, payload: date })

  const selectDates = (dates: Date[]) => {
    const filtered = filter(dates)
    dispatch({ type: CalendarActions.SelectDates, payload: filtered })
  }

  const clearSelectedDates = () =>
    dispatch({ type: CalendarActions.ClearSelectedDates })

  useEffect(() => {
    selectDates(initialSelectedDates)
  }, [])

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
