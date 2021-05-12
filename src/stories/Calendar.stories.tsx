import { Meta, Story } from "@storybook/react"
import React from "react"
import styled from "styled-components"
import { Calendar } from "../components/calendar"
import { CalendarProps } from "../components/calendar/types"

export default {
  title: "Example/Calendar",
  component: Calendar,
  argTypes: {
    month: {
      control: {
        type: "date",
      },
    },
    selectedDates: {},
  },
} as Meta

const CalendarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
`

const WeekdaysStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

const DatesStyled = styled.div<{ firstChildGridColumn: number }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & :first-child {
    grid-column: ${(props) => 1 + props.firstChildGridColumn};
  }
`

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />

export const CSSGridCalendar = Template.bind({})
CSSGridCalendar.args = {
  month: new Date(),
  selectedDates: [],
  children: (
    <CalendarStyled>
      <HeaderStyled>
        <Calendar.Header>
          {({ monthLong }) => <div className="month">{monthLong}</div>}
        </Calendar.Header>

        <WeekdaysStyled>
          <Calendar.Weekday>{({ long }) => <div>{long}</div>}</Calendar.Weekday>
        </WeekdaysStyled>
      </HeaderStyled>

      <Calendar.Dates>
        {({ firstWeekday }) => (
          <DatesStyled firstChildGridColumn={firstWeekday}>
            <Calendar.Date>
              {({ dayOfMonth }) => <div>{dayOfMonth}</div>}
            </Calendar.Date>
          </DatesStyled>
        )}
      </Calendar.Dates>
    </CalendarStyled>
  ),
}
