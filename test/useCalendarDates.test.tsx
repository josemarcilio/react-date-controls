import { renderHook } from "@testing-library/react-hooks"
import { isEqual, startOfDay } from "date-fns"
import { CalendarDateShape, useCalendarDates } from "../src/calendar/useCalendarDates"

function assertCalendarDates(
  selectedDates: Date[],
  calendarDates: CalendarDateShape[]
) {
  expect(calendarDates.filter((date) => date.isSelected)).toHaveLength(
    selectedDates.length
  )

  expect(
    selectedDates.every((selectedDate) =>
      calendarDates.some((date) =>
        isEqual(startOfDay(date.value), startOfDay(selectedDate))
      )
    )
  ).toBeTruthy()

  selectedDates.forEach((selectedDate) => {
    const calendarDate = calendarDates.find((date) =>
      isEqual(startOfDay(date.value), startOfDay(selectedDate))
    )

    expect(calendarDate).toBeDefined()
    expect(calendarDate?.isSelected).toBeTruthy()
  })
}

test("should start without selected dates", () => {
  const month = new Date(2021, 4, 1)
  const selectedDates: Date[] = []

  const { result } = renderHook(() =>
    useCalendarDates({ month, selectedDates })
  )

  assertCalendarDates([], result.current)
})

test("should start with selected dates", () => {
  const month = new Date(2021, 4, 1)
  const selectedDates = [
    new Date(2021, 4, 1),
    new Date(2021, 4, 2),
    new Date(2021, 4, 3),
  ]

  const { result } = renderHook(() =>
    useCalendarDates({ month, selectedDates })
  )

  assertCalendarDates(selectedDates, result.current)
})
