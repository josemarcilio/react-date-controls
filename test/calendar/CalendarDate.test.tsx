import { render } from "@testing-library/react"
import { endOfMonth, getDate } from "date-fns"
import React from "react"
import { Calendar } from "../../src/calendar/Calendar"

describe("<Calendar.Date />", () => {
  test("should render all days of month correctly", () => {
    const calendarDate = new Date(2021, 4, 1)
    const lastDayOfMonth = getDate(endOfMonth(calendarDate))

    const { getByText } = render(
      <Calendar month={calendarDate}>
        <Calendar.Date>{({ dayOfMonth }) => <p>{dayOfMonth}</p>}</Calendar.Date>
      </Calendar>
    )

    for (let i = 1; i <= lastDayOfMonth; i++) {
      expect(getByText(i)).toBeDefined()
    }
  })
})
