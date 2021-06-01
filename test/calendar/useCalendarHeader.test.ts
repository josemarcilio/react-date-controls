import { renderHook } from "@testing-library/react-hooks"
import {
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns"
import { useCalendarHeader } from "../../src/calendar/useCalendarHeader"

function assertDaysOfWeek(daysOfWeek: Date[], firstDayOfWeek = 0) {
  const validators = [
    isSunday,
    isMonday,
    isTuesday,
    isWednesday,
    isThursday,
    isFriday,
    isSaturday,
  ]

  const daysOfWeekValidators = validators
    .slice(firstDayOfWeek, validators.length)
    .concat(validators.slice(0, firstDayOfWeek))

  for (let i = 0; i < daysOfWeek.length; i++) {
    expect(daysOfWeekValidators[i](daysOfWeek[i])).toBeTruthy()
  }
}

test("should generate correct number of days of week", () => {
  const daysInWeek = 7
  let firstDayOfWeek = 0

  const { result, rerender } = renderHook(() =>
    useCalendarHeader(firstDayOfWeek)
  )

  expect(result.current).toHaveLength(daysInWeek)

  assertDaysOfWeek(result.current)

  for (let i = 0; i < daysInWeek; i++) {
    firstDayOfWeek = i
    rerender()

    assertDaysOfWeek(result.current, firstDayOfWeek)
  }
})
