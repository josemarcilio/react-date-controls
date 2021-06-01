import { render, RenderResult } from "@testing-library/react"
import React from "react"
import { Calendar } from "../../src/calendar/Calendar"

let container: RenderResult

describe("<Calendar.Weekday />", () => {
  test("should render long names correctly", () => {
    const { getByText } = render(
      <Calendar month={new Date(2021, 4, 1)} locales="en">
        <Calendar.Weekday>{({ long }) => <p>{long}</p>}</Calendar.Weekday>
      </Calendar>
    )

    expect(getByText(/^sunday$/i)).toBeDefined()
    expect(getByText(/^monday$/i)).toBeDefined()
    expect(getByText(/^tuesday$/i)).toBeDefined()
    expect(getByText(/^wednesday$/i)).toBeDefined()
    expect(getByText(/^thursday$/i)).toBeDefined()
    expect(getByText(/^friday$/i)).toBeDefined()
    expect(getByText(/^saturday$/i)).toBeDefined()
  })

  test("should render short names correctly", () => {
    const { getByText } = render(
      <Calendar month={new Date(2021, 4, 1)} locales="en">
        <Calendar.Weekday>{({ short }) => <p>{short}</p>}</Calendar.Weekday>
      </Calendar>
    )

    expect(getByText(/^sun$/i)).toBeDefined()
    expect(getByText(/^mon$/i)).toBeDefined()
    expect(getByText(/^tue$/i)).toBeDefined()
    expect(getByText(/^wed$/i)).toBeDefined()
    expect(getByText(/^thu$/i)).toBeDefined()
    expect(getByText(/^fri$/i)).toBeDefined()
    expect(getByText(/^sat$/i)).toBeDefined()
  })

  test("should render narrow names correctly", () => {
    const { getByText, getAllByText } = render(
      <Calendar month={new Date(2021, 4, 1)} locales="en">
        <Calendar.Weekday>{({ narrow }) => <p>{narrow}</p>}</Calendar.Weekday>
      </Calendar>
    )

    expect(getAllByText(/^s$/i)).toHaveLength(2)
    expect(getAllByText(/^t$/i)).toHaveLength(2)
    expect(getByText(/^m$/i)).toBeDefined()
    expect(getByText(/^w$/i)).toBeDefined()
    expect(getByText(/^f$/i)).toBeDefined()
  })
})
