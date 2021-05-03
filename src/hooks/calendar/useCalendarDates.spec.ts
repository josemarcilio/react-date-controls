import { renderHook } from "@testing-library/react-hooks"
import { getDaysInMonth } from "date-fns"
import { useCalendarDates } from "./useCalendarDates"

test("should generate correct dates for a month with no selected dates", () => {
  const month = new Date(2021, 4, 1)
  const selectedDates: Date[] = []

  const { result } = renderHook(() =>
    useCalendarDates({ month, selectedDates: selectedDates })
  )

  expect(result.current).toHaveLength(getDaysInMonth(month))
  expect(result.current.filter((date) => date.isSelected)).toHaveLength(
    selectedDates.length
  )
})

test("should generate correct dates for a month with selected dates", () => {
  const month = new Date(2021, 4, 1)
  const selectedDates = [new Date(2021, 4, 14), new Date(2021, 4, 13)]

  const { result } = renderHook(() =>
    useCalendarDates({ month, selectedDates: selectedDates })
  )

  expect(result.current).toHaveLength(getDaysInMonth(month))
  expect(result.current.filter((date) => date.isSelected)).toHaveLength(
    selectedDates.length
  )
})

test("should generate correct selected dates without selections from other months", () => {
  const month = new Date(2021, 4, 1)
  const selectedDatesFromOtherMonths = [
    new Date(2021, 3, 1),
    new Date(2021, 8, 7),
  ]
  const selectedDates = [
    new Date(2021, 4, 14),
    new Date(2021, 4, 13),
    ...selectedDatesFromOtherMonths,
  ]

  const { result } = renderHook(() =>
    useCalendarDates({ month, selectedDates: selectedDates })
  )

  expect(result.current).toHaveLength(getDaysInMonth(month))
  expect(result.current.filter((date) => date.isSelected)).toHaveLength(
    selectedDates.length - selectedDatesFromOtherMonths.length
  )
})
