import React from "react"
import ReactDOM from "react-dom"

export { Calendar } from "./components/calendar"
export type {
  CalendarDateProps,
  CalendarDatesProps,
  CalendarHeaderProps,
  CalendarProps,
} from "./components/calendar/types"

ReactDOM.render(
  <React.StrictMode>
    <p>Hello Vite + React!</p>
  </React.StrictMode>,
  document.getElementById("root")
)
