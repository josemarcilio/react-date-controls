import { render } from "@testing-library/react"
import React from "react"
import { Calendar } from "../../src/calendar/Calendar"

describe("<Calendar.Header />", () => {
  test("should render month correctly", () => {
    render(
      <Calendar month={new Date(2021, 4, 1)}>
        <Calendar.Header>
          {({ month }) => {
            expect(month).toEqual(4)
            return <></>
          }}
        </Calendar.Header>
      </Calendar>
    )
  })

  test("should render long name of month correctly", () => {
    render(
      <Calendar month={new Date(2021, 3, 1)} locales="en">
        <Calendar.Header>
          {({ monthLong }) => {
            expect(monthLong).toEqual("April")
            return <></>
          }}
        </Calendar.Header>
      </Calendar>
    )
  })

  test("should render month correctly", () => {
    render(
      <Calendar month={new Date(2021, 8, 1)} locales="en">
        <Calendar.Header>
          {({ monthShort }) => {
            expect(monthShort).toEqual("Sep")
            return <></>
          }}
        </Calendar.Header>
      </Calendar>
    )
  })

  test("should render month correctly", () => {
    render(
      <Calendar month={new Date(2021, 11, 1)} locales="en">
        <Calendar.Header>
          {({ monthNarrow }) => {
            expect(monthNarrow).toEqual("D")
            return <></>
          }}
        </Calendar.Header>
      </Calendar>
    )
  })
})
