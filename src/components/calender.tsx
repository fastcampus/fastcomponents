import React, { useState, useContext, createContext } from 'react';
import type {
  DateCalenderProps,
  WeekCalenderProps,
  MonthCalenderProps,
  CalenderProps,
} from '../types/calender.interface';
import Input from './input';

const CalenderContext = createContext({ selectedDate: new Date(), isCurrentYearMonth: true });

const getMonthLastDay = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  if (month !== 12) {
    return new Date(year, month + 1, -1).getDate() + 1;
  }
  return new Date(year + 1, month, -1).getDate() + 1;
};

const isValidDate = (d: Date) => {
  return d instanceof Date && !isNaN(d.getTime()) && d.getFullYear() > 1900;
};

const WeekCalender = ({ startDate, cnt, leftPad }: WeekCalenderProps) => {
  const dateList = [
    ...new Array(leftPad).fill(0).map((_, idx) => -idx),
    ...new Array(cnt).fill(0).map((_, idx) => startDate + idx),
    ...new Array(7 - leftPad - cnt).fill(0).map((_, idx) => -idx),
  ];
  return (
    <div className="fastcomp-week-calender">
      {dateList.map((date: number) => {
        return <DateCalender key={`${date}-${cnt}-${leftPad}`} dateNumber={date} />;
      })}
    </div>
  );
};

const DateCalender = ({ dateNumber }: DateCalenderProps) => {
  const { selectedDate, isCurrentYearMonth } = useContext(CalenderContext);
  return (
    <div
      className={`fastcomp-date-calender ${
        selectedDate.getDate() === dateNumber && isCurrentYearMonth ? 'selected' : ''
      } `}
    >
      {dateNumber <= 0 ? '' : dateNumber}
    </div>
  );
};

const MonthCalender = ({ year, month }: MonthCalenderProps) => {
  const date = new Date(`${year}-${month}-01`);
  const leftPad = date.getDay();
  const lastDay = getMonthLastDay(date);
  const nextStartDate = 8 - leftPad;
  const WeekCalenderList = [
    <WeekCalender key={`${year}-${month}`} startDate={1} cnt={7 - leftPad} leftPad={leftPad} />,
  ];

  for (let i = 0; i * 7 + nextStartDate <= lastDay; ++i) {
    const startDate = nextStartDate + 7 * i;
    if (startDate + 7 > lastDay) {
      WeekCalenderList.push(
        <WeekCalender key={`${year}-${month}-${i}`} startDate={startDate} cnt={lastDay - startDate + 1} leftPad={0} />
      );
    } else {
      WeekCalenderList.push(<WeekCalender key={`${year}-${month}-${i}`} startDate={startDate} cnt={7} leftPad={0} />);
    }
  }
  return <div>{WeekCalenderList}</div>;
};

const Calender = ({ date = new Date() }: CalenderProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [CalenderLocation, setCalenderLocation] = useState<{ year: number; month: number }>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  const increaseCalenderLocation = () => {
    setCalenderLocation((state) => {
      if (state.month === 12) {
        return {
          year: state.year + 1,
          month: 1,
        };
      }
      return {
        ...state,
        month: state.month + 1,
      };
    });
  };

  const decreaseCalenderLocation = () => {
    setCalenderLocation((state) => {
      if (state.month === 1) {
        return {
          year: state.year - 1,
          month: 12,
        };
      }
      return {
        ...state,
        month: state.month - 1,
      };
    });
  };

  const dateInputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const typedDate = new Date(value);
    if (isValidDate(typedDate)) {
      setSelectedDate(typedDate);
      setCalenderLocation({ year: typedDate.getFullYear(), month: typedDate.getMonth() + 1 });
    }
  };

  const isCurrentYearMonth =
    selectedDate.getFullYear() === CalenderLocation.year && selectedDate.getMonth() + 1 === CalenderLocation.month;

  return (
    <CalenderContext.Provider value={{ selectedDate, isCurrentYearMonth }}>
      <div>
        <div>
          <button onClick={increaseCalenderLocation}>+</button>
          {CalenderLocation.year}-{CalenderLocation.month}
          <button onClick={decreaseCalenderLocation}>-</button>
          <Input type="date" onChange={dateInputOnChangeHandler} />
        </div>
        <MonthCalender year={CalenderLocation.year} month={CalenderLocation.month} />
      </div>
    </CalenderContext.Provider>
  );
};

export default Calender;
