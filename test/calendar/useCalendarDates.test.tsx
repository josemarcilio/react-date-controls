import { renderHook } from "@testing-library/react-hooks"
import { useCalendarDates } from "../../src/calendar/useCalendarDates"

describe("useCalendarDates", () => {
  test("should return the correct dates", () => {
    const month = new Date(2021, 4, 1)

    const { result } = renderHook(() => useCalendarDates({ month }))
    const uniqueDates = new Set(result.current)

    expect(result.current.length).toEqual(31)
    expect(uniqueDates.size).toEqual(result.current.length)
  })
})
