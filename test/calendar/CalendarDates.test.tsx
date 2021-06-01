import { render } from "@testing-library/react"
import React from "react"
import { Calendar } from "../../src/calendar/Calendar"

describe("<Calendar.Dates />", () => {
  test("should render the correct first day of month", () => {
    const calendarDate = new Date(2021, 4, 1)
    const firstMonthWeekday = 6

    const { getByText } = render(
      <Calendar month={calendarDate}>
        <Calendar.Dates>
          {({ firstWeekday }) => <p>{firstWeekday}</p>}
        </Calendar.Dates>
      </Calendar>
    )

    expect(getByText(firstMonthWeekday)).toBeDefined()
  })
})
