import { renderHook } from "@testing-library/react-hooks"
import { useCalendarHeader } from "./useCalendarHeader"

test("should generate correct number of days of week", () => {
  const daysInWeek = 7

  const { result } = renderHook(() => useCalendarHeader())

  expect(result.current.daysOfWeek).toHaveLength(daysInWeek)
})
