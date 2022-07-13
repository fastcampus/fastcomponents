import type { TimeZoneType } from '@day1co/pebbles';
import type { ReactNode } from 'react';

export interface CalendarProps {
  date?: Date;
  endDate?: Date;
  navigator?: boolean;
  dayColumns?: boolean;
  dateinput?: boolean;
  rangeDate?: boolean;
  disableSelect?: boolean;
  setDate?: (date: Date | null) => void;
  setEndDate?: (date: Date | null) => void;
  calendarLocation?: MonthCalendarProps;
  setCalendarLocation?: (calendarLocation: MonthCalendarProps) => void;
  timeZone?: TimeZoneType;
  focusedDates?: number[];
}

export interface MonthCalendarProps {
  year: number;
  month: number;
}

export interface WeekCalendarProps {
  startDate: number;
  dateCnt: number;
  leftPad: number;
}

export interface DateCalendarProps {
  dateNumber: number;
  className?: string;
}

export interface CalendarLocation {
  year: number;
  month: number;
}

export interface CalendarContexts {
  selectedDate: Date | null;
  selectedEndDate?: Date | null;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  setSelectedEndDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  calendarLocation: CalendarLocation;
  setCalendarLocation?: React.Dispatch<React.SetStateAction<CalendarLocation>>;
  rangeDate: boolean;
  timeZone?: TimeZoneType;
  disableSelect: boolean;
  dayColumns: boolean;
  focusedDates?: number[];
}
