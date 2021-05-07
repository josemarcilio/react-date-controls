import { Dispatch, ReactNode } from "react"
import {
  CalendarActionShape,
  CalendarStateShape,
} from "./calendarReducer.types"

export type CalendarProviderProps = {
  children: ReactNode
}

export type CalendarStoreShape = {
  state: CalendarStateShape
  dispatch: Dispatch<CalendarActionShape>
}
