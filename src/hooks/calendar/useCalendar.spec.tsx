import { act, renderHook } from "@testing-library/react-hooks"
import { isEqual, startOfDay } from "date-fns"
import React from "react"
import { CalendarProvider } from "./CalendarContext"
import { useCalendar } from "./useCalendar"
import type { CalendarDate } from "./useCalendarDates"

function assertCalendarDates(
  expectedSelectedDates: Date[],
  actualSelectedDates: Date[],
  calendarDates: CalendarDate[]
) {
  expect(actualSelectedDates).toHaveLength(expectedSelectedDates.length)

  expect(
    expectedSelectedDates.every((selectedDate) =>
      actualSelectedDates.some((date) =>
        isEqual(startOfDay(date), startOfDay(selectedDate))
      )
    )
  ).toBeTruthy()

  expectedSelectedDates.forEach((selectedDate) => {
    const calendarDate = calendarDates.find((date) =>
      isEqual(startOfDay(date.value), startOfDay(selectedDate))
    )

    expect(calendarDate).toBeDefined()
    expect(calendarDate?.isSelected).toBeTruthy()
  })
}

test("should not be able to change month", () => {
  const initialMonth = new Date(2021, 4, 1)
  let month = initialMonth
  const selectedDates = [new Date(2021, 4, 1)]

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )

  const { result, rerender } = renderHook(
    () =>
      useCalendar({ initialMonth: month, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  month = new Date(2021, 8, 8)
  rerender()

  expect(result.current.month).toEqual(initialMonth)

  assertCalendarDates(
    selectedDates,
    result.current.selectedDates,
    result.current.dates
  )
})

test("should start with selected dates", () => {
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates = [
    new Date(2021, 4, 1),
    new Date(2021, 4, 2),
    new Date(2021, 4, 3),
  ]

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ initialMonth, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  expect(result.current.selectedDates).toHaveLength(selectedDates.length)
  assertCalendarDates(
    selectedDates,
    result.current.selectedDates,
    result.current.dates
  )
})

test("should ignore selected dates from other months", () => {
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates = [
    new Date(2021, 8, 1),
    new Date(2021, 3, 2),
    new Date(2021, 4, 3),
  ]

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ initialMonth, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  expect(result.current.selectedDates).toHaveLength(1)
  assertCalendarDates(
    [new Date(2021, 4, 3)],
    result.current.selectedDates,
    result.current.dates
  )
})

test("should start with no selected dates and select one", () => {
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates: Date[] = []

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ initialMonth, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  const selectedDate = new Date(2021, 4, 2)

  act(() => {
    result.current.selectDate(selectedDate)
  })

  expect(result.current.selectedDates).toHaveLength(1)

  assertCalendarDates(
    [selectedDate],
    result.current.selectedDates,
    result.current.dates
  )
})

test("should start with selected date and unselect it", () => {
  const initialMonth = new Date(2021, 4, 1)
  const selectedDate = new Date(2021, 4, 2)
  const selectedDates = [selectedDate]

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ initialMonth, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  act(() => {
    result.current.unselectDate(selectedDate)
  })

  assertCalendarDates([], result.current.selectedDates, result.current.dates)
})

test("should replace selected dates", () => {
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates = [new Date(2021, 4, 1)]

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ initialMonth, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  const newSelectedDates = [
    new Date(2021, 4, 2),
    new Date(2021, 4, 3),
    new Date(2021, 4, 4),
  ]
  act(() => {
    result.current.selectDates(newSelectedDates)
  })

  assertCalendarDates(
    newSelectedDates,
    result.current.selectedDates,
    result.current.dates
  )
})

test("should clear selected dates", () => {
  const initialMonth = new Date(2021, 4, 1)
  const selectedDates = [
    new Date(2021, 4, 2),
    new Date(2021, 4, 3),
    new Date(2021, 4, 4),
  ]

  const calendarProvider = ({ children }: { children: any }) => (
    <CalendarProvider>{children}</CalendarProvider>
  )
  const { result } = renderHook(
    () => useCalendar({ initialMonth, initialSelectedDates: selectedDates }),
    { wrapper: calendarProvider }
  )

  act(() => {
    result.current.clearSelectedDates()
  })

  assertCalendarDates([], result.current.selectedDates, result.current.dates)
})
