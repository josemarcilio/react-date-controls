import { isEqual, startOfDay } from "date-fns"
import type {
  CalendarActionShape,
  CalendarStateShape,
} from "./types/calendarReducer.types"
import { CalendarActions } from "./types/calendarReducer.types"

const calendarReducer = (
  state: CalendarStateShape,
  action: CalendarActionShape
) => {
  switch (action.type) {
    case CalendarActions.SelectDate:
      return {
        ...state,
        selectedDates: [...state.selectedDates, action.payload],
      }
    case CalendarActions.UnselectDate:
      return {
        ...state,
        selectedDates: state.selectedDates.filter(
          (date) => !isEqual(startOfDay(date), startOfDay(action.payload))
        ),
      }
    case CalendarActions.SelectDates:
      return { ...state, selectedDates: action.payload }
    case CalendarActions.ClearSelectedDates:
      return { ...state, selectedDates: [] }
    default:
      return state
  }
}

export default calendarReducer
