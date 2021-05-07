import React, { createContext, useReducer } from "react"
import calendarReducer from "./calendarReducer"
import type { CalendarProviderProps, CalendarStoreShape } from "./types"

const initialSelectedDates: Date[] = []

const initialState = {
  selectedDates: initialSelectedDates,
}

const CalendarContext = createContext<CalendarStoreShape>({
  state: initialState,
  dispatch: () => {},
})

const { Provider } = CalendarContext

const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { CalendarContext, CalendarProvider }
