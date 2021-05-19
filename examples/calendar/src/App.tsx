import React from "react"
import { Calendar } from "react-date-controls"

function App() {
  const initialMonth = new Date(2021, 4, 1)
  const locales = "default"

  return (
    <div className="container mx-auto text-gray-600">
      <Calendar month={initialMonth} selectedDates={[]} locales={locales}>
        <div className="flex p-2 bg-gray-50 border-b justify-center">
          <Calendar.Header>
            {({ month, monthLong, monthShort, monthNarrow }) => {
              return (
                <div className="flex items-center justify-between w-full gap-2">
                  <div className="w-10 h-10 flex justify-center items-center bg-red-300 text-white font-bold rounded-full">
                    {1 + month}
                  </div>

                  <div className="flex flex-col">
                    <span className="font-bold text-xl capitalize">
                      {monthLong}
                    </span>
                    <span className="text-xs">{monthShort}</span>
                  </div>

                  <div className="w-10 h-10 flex justify-center items-center bg-blue-300 text-white font-bold rounded-full">
                    {monthNarrow}
                  </div>
                </div>
              )
            }}
          </Calendar.Header>
        </div>

        <div className="grid grid-cols-7 bg-gray-100 border-b">
          <Calendar.Weekday>
            {({ long, short, narrow }) => {
              return (
                <div className="flex items-center justify-center gap-2">
                  <div className="text-4xl font-bold text-gray-200">
                    {narrow}
                  </div>

                  <div className="flex flex-col">
                    <div className="font-bold capitalize">{short}</div>
                    <div className="text-xs">{long}</div>
                  </div>
                </div>
              )
            }}
          </Calendar.Weekday>
        </div>

        <div className="grid grid-cols-7">
          <Calendar.Date>
            {({ dayOfMonth }) => {
              return (
                <div className="flex p-8 justify-center items-center font-bold text-xl border-l">
                  <div className="flex flex-col">
                    <span>{dayOfMonth}</span>
                  </div>
                </div>
              )
            }}
          </Calendar.Date>
        </div>
      </Calendar>
    </div>
  )
}

export default App
