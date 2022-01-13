export interface CalendarProps {
  date?: Date;
}

export interface MonthCalendarProps {
  year: number;
  month: number;
}

export interface WeekCalendarProps {
  startDate: number;
  cnt: number;
  leftPad: number;
}

export interface DateCalendarProps {
  dateNumber: number;
}
