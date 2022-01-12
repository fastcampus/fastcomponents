export interface CalenderProps {
  date?: Date;
}

export interface MonthCalenderProps {
  year: number;
  month: number;
}

export interface WeekCalenderProps {
  startDate: number;
  cnt: number;
  leftPad: number;
}

export interface DateCalenderProps {
  dateNumber: number;
}
