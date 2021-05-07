import { isEqual, startOfDay } from "date-fns"

export type CalendarState = {
  selectedDates: Date[]
}

export enum CalendarActions {
  SelectDate,
  UnselectDate,
  SelectDates,
  ClearSelectedDates,
}

export type CalendarAction =
  | {
      type: CalendarActions.SelectDate
      payload: Date
    }
  | {
      type: CalendarActions.UnselectDate
      payload: Date
    }
  | {
      type: CalendarActions.SelectDates
      payload: Date[]
    }
  | {
      type: CalendarActions.ClearSelectedDates
    }

const calendarReducer = (state: CalendarState, action: CalendarAction) => {
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
