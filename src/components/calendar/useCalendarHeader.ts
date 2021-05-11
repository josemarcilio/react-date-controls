import {
  nextFriday,
  nextMonday,
  nextSaturday,
  nextSunday,
  nextThursday,
  nextTuesday,
  nextWednesday,
  startOfWeek,
} from "date-fns"

export function useCalendarHeader(firstDayOfWeek = 0) {
  const today = startOfWeek(new Date())

  const days = [
    nextSunday(today),
    nextMonday(today),
    nextTuesday(today),
    nextWednesday(today),
    nextThursday(today),
    nextFriday(today),
    nextSaturday(today),
  ]

  const daysOfWeek = days
    .slice(firstDayOfWeek, days.length)
    .concat(days.slice(0, firstDayOfWeek))

  return daysOfWeek
}
