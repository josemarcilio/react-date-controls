import React, { createContext, Dispatch, ReactNode, useReducer } from "react"
import calendarReducer, {
  CalendarAction,
  CalendarState,
} from "./calendarReducer"

type CalendarStore = {
  state: CalendarState
  dispatch: Dispatch<CalendarAction>
}

const initialSelectedDates: Date[] = []

const initialState = {
  selectedDates: initialSelectedDates,
}

const CalendarContext = createContext<CalendarStore>({
  state: initialState,
  dispatch: () => {},
})

const { Provider } = CalendarContext

const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { CalendarContext, CalendarProvider }
