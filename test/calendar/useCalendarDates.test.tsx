import { renderHook } from "@testing-library/react-hooks"
import { useCalendarDates } from "../../src/calendar/useCalendarDates"

describe("useCalendarDates", () => {
  test("should start with selected dates", () => {
    const month = new Date(2021, 4, 1)

    const { result } = renderHook(() => useCalendarDates({ month }))

    expect(result.current.length).toEqual(31)
  })
})
