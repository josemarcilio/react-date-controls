import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"
import { Calendar } from "./Calendar"

test("should render calendar component", () => {
  const locales = "default"
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates = [
    new Date(2021, 4, 1),
    new Date(2021, 4, 2),
    new Date(2021, 4, 3),
  ]

  const { getByTestId } = render(
    <Calendar initialMonth={initialMonth} initialSelectedDates={selectedDates}>
      {({ monthName }) => {
        return (
          <>
            <div data-testid="month">{monthName}</div>
          </>
        )
      }}
    </Calendar>
  )

  expect(getByTestId("month")).toHaveTextContent(
    initialMonth.toLocaleString(locales, { month: "long" })
  )
})
