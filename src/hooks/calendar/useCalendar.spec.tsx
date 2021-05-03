import { act, renderHook } from "@testing-library/react-hooks"
import { isEqual, startOfDay } from "date-fns"
import React from "react"
import { CalendarProvider } from "./CalendarContext"
import { useCalendar } from "./useCalendar"

test("should start with no selected dates and select one", () => {
  const month = new Date(2021, 4, 1)
  const selectedDates: Date[] = []

  const wrapper = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ month, initialSelectedDates: selectedDates }),
    { wrapper }
  )

  const selectedDate = new Date(2021, 4, 2)
  act(() => {
    result.current.selectDate(selectedDate)
  })

  expect(result.current.selectedDates).toHaveLength(1)

  const calendarDate = result.current.dates.find((date) =>
    isEqual(startOfDay(date.value), startOfDay(selectedDate))
  )
  expect(calendarDate).toBeDefined()
  expect(calendarDate?.isSelected).toBeTruthy()
})

test("should start with selected date and unselect it", () => {
  const month = new Date(2021, 4, 1)
  const selectedDate = new Date(2021, 4, 2)
  const selectedDates = [selectedDate]

  const wrapper = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ month, initialSelectedDates: selectedDates }),
    { wrapper }
  )

  act(() => {
    result.current.unselectDate(selectedDate)
  })

  expect(result.current.selectedDates).toHaveLength(0)
})
