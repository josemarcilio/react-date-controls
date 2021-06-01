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
      <Calendar month={new Date(2021, 4, 1)} locales="pt-BR">
        <Calendar.Weekday>{({ short }) => <p>{short}</p>}</Calendar.Weekday>
      </Calendar>
    )

    expect(getByText(/^dom.$/i)).toBeDefined()
    expect(getByText(/^seg.$/i)).toBeDefined()
    expect(getByText(/^ter.$/i)).toBeDefined()
    expect(getByText(/^qua.$/i)).toBeDefined()
    expect(getByText(/^qui.$/i)).toBeDefined()
    expect(getByText(/^sex.$/i)).toBeDefined()
    expect(getByText(/^sáb.$/i)).toBeDefined()
  })

  test("should render narrow names correctly", () => {
    const { getByText } = render(
      <Calendar month={new Date(2021, 4, 1)} locales="es">
        <Calendar.Weekday>{({ narrow }) => <p>{narrow}</p>}</Calendar.Weekday>
      </Calendar>
    )

    expect(getByText(/^d$/i)).toBeDefined()
    expect(getByText(/^l$/i)).toBeDefined()
    expect(getByText(/^m$/i)).toBeDefined()
    expect(getByText(/^x$/i)).toBeDefined()
    expect(getByText(/^j$/i)).toBeDefined()
    expect(getByText(/^v$/i)).toBeDefined()
    expect(getByText(/^s$/i)).toBeDefined()
  })
})
