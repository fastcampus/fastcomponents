import type { CalendarLocation } from '../../types/calendar.interface';
export const DAY_COUNT_OF_ONE_WEEK = 7;

export const getMonth = (date: Date) => date.getMonth() + 1;
export const getNextMonthLocation = ({ year, month }: CalendarLocation) => {
  if (month === 12) {
    return {
      year: year + 1,
      month: 1,
    };
  }
  return {
    year,
    month: month + 1,
  };
};
export const getPrevMonthLocation = ({ year, month }: CalendarLocation) => {
  if (month === 1) {
    return {
      year: year - 1,
      month: 12,
    };
  }
  return {
    year,
    month: month - 1,
  };
};
export const getYMDString = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
