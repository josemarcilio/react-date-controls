import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { getDaysInMonth } from "date-fns"
import React from "react"
import { Calendar } from "./Calendar"

test("should render calendar component", async () => {
  const locales = "default"
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates = [
    new Date(2021, 4, 1),
    new Date(2021, 4, 2),
    new Date(2021, 4, 3),
  ]

  const { getByTestId, findAllByRole } = render(
    <Calendar initialMonth={initialMonth} initialSelectedDates={selectedDates}>
      {({ monthName, dates }) => (
        <>
          <div data-testid="month">{monthName}</div>

          <ul role="list">
            {dates.map((date) => (
              <Calendar.Date
                key={date.value.getDate()}
                date={date}
                locales={locales}
              >
                {({ dayOfMonth, weekdayLong }) => (
                  <li role="listitem">
                    {dayOfMonth} - {weekdayLong}
                  </li>
                )}
              </Calendar.Date>
            ))}
          </ul>
        </>
      )}
    </Calendar>
  )

  expect(getByTestId("month")).toHaveTextContent(
    initialMonth.toLocaleString(locales, { month: "long" })
  )

  const dates = await findAllByRole("listitem")
  expect(dates).toHaveLength(getDaysInMonth(initialMonth))
})
