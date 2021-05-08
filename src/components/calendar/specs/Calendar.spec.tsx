import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { getDate, getDay, startOfMonth } from "date-fns"
import React from "react"
import { Calendar } from "../Calendar"

test("should render Calendar component", async () => {
  const locales = "default"
  const initialMonth = new Date(2021, 4, 1)

  render(
    <Calendar initialMonth={initialMonth} initialSelectedDates={[]}>
      {({ monthName }) => {
        expect(monthName).toEqual(
          initialMonth.toLocaleString(locales, { month: "long" })
        )

        return <></>
      }}
    </Calendar>
  )
})

test("should render CalendarDate component", () => {
  const initialMonth = new Date(2021, 4, 1)
  const firstDate = startOfMonth(initialMonth)
  const locales = "default"

  render(
    <Calendar
      initialMonth={initialMonth}
      initialSelectedDates={[]}
      locales={locales}
    >
      {({ dates: [date] }) => (
        <>
          <Calendar.Date date={date}>
            {({
              dayOfMonth,
              weekday,
              weekdayLong,
              weekdayShort,
              weekdayNarrow,
            }) => {
              expect(dayOfMonth).toEqual(getDate(firstDate))
              expect(weekday).toEqual(getDay(firstDate))
              expect(weekdayLong).toEqual(
                firstDate.toLocaleString(locales, { weekday: "long" })
              )
              expect(weekdayShort).toEqual(
                firstDate.toLocaleString(locales, { weekday: "short" })
              )
              expect(weekdayNarrow).toEqual(
                firstDate.toLocaleString(locales, { weekday: "narrow" })
              )

              return <></>
            }}
          </Calendar.Date>
        </>
      )}
    </Calendar>
  )
})

test("should render CalendarWeekDay component", () => {
  const initialMonth = new Date(2021, 4, 1)
  const locales = "default"

  render(
    <Calendar
      initialMonth={initialMonth}
      initialSelectedDates={[]}
      locales={locales}
    >
      {({ daysOfWeek: [firstDayOfWeek] }) => (
        <>
          <Calendar.Weekday date={firstDayOfWeek}>
            {({ day, long, short, narrow }) => {
              expect(day).toEqual(getDay(firstDayOfWeek))
              expect(long).toEqual(
                firstDayOfWeek.toLocaleString(locales, { weekday: "long" })
              )
              expect(short).toEqual(
                firstDayOfWeek.toLocaleString(locales, { weekday: "short" })
              )
              expect(narrow).toEqual(
                firstDayOfWeek.toLocaleString(locales, { weekday: "narrow" })
              )

              return <></>
            }}
          </Calendar.Weekday>
        </>
      )}
    </Calendar>
  )
})
