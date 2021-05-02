import { renderHook } from "@testing-library/react-hooks"
import { useCalendar } from "./useCalendar"

test("should increment counter", () => {
  const { result } = renderHook(() =>
    useCalendar({ month: new Date(2021, 4, 1), selectedDates: [] })
  )

  // act(() => {
  //   result.current.increment()
  // })

  expect(result.current.dates).toHaveLength(30)
})
