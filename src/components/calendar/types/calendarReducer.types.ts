export enum CalendarActions {
  SelectDate,
  UnselectDate,
  SelectDates,
  ClearSelectedDates,
}

export type CalendarStateShape = {
  selectedDates: Date[]
}

export type CalendarActionShape =
  | {
      type: CalendarActions.SelectDate
      payload: Date
    }
  | {
      type: CalendarActions.UnselectDate
      payload: Date
    }
  | {
      type: CalendarActions.SelectDates
      payload: Date[]
    }
  | {
      type: CalendarActions.ClearSelectedDates
    }
