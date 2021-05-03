import { isEqual, startOfDay } from "date-fns"

export type CalendarState = {
  selectedDates: Date[]
}

export type CalendarAction =
  | {
      type: "SelectDate"
      payload: Date
    }
  | {
      type: "UnselectDate"
      payload: Date
    }
  | {
      type: "SelectDates"
      payload: Date[]
    }

const calendarReducer = (state: CalendarState, action: CalendarAction) => {
  switch (action.type) {
    case "SelectDate":
      return {
        ...state,
        selectedDates: [...state.selectedDates, action.payload],
      }
    case "UnselectDate":
      return {
        ...state,
        selectedDates: state.selectedDates.filter(
          (date) => !isEqual(startOfDay(date), startOfDay(action.payload))
        ),
      }
    case "SelectDates":
      return { ...state, selectedDates: action.payload }
    default:
      return state
  }
}

export default calendarReducer
