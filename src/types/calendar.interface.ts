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

export interface CalendarLocation {
  year: number;
  month: number;
}

export interface CalendarContexts {
  selectedDate: Date;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date>>;
  calendarLocation: CalendarLocation;
  setCalendarLocation?: React.Dispatch<React.SetStateAction<CalendarLocation>>;
  isCurrentYearMonth: boolean;
}