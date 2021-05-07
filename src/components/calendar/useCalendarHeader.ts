export function useCalendarHeader() {
  const daysOfWeek = [...Array(7).keys()]

  return { daysOfWeek }
}
