import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Calendar as FCCalendar } from '../../../src';
import { DateUtil } from '@day1co/pebbles';

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  return (
    <div>
      <div>
        SELECTED START DATE :{' '}
        {startDate
          ? DateUtil.format(startDate, { format: 'YYYY-MM-DD:HH:mm:SS', isUtc: false, timeZone: 'Asia/Seoul' })
          : ''}
      </div>
      <div>
        SELECTED END DATE :{' '}
        {endDate
          ? DateUtil.format(endDate, { format: 'YYYY-MM-DD:HH:mm:SS', isUtc: false, timeZone: 'Asia/Seoul' })
          : ''}
      </div>
      <div
        css={css`
          display: flex;
          .fc-calendar {
            .calendar-contents {
              border: 0.3rem solid black;
            }
            .navigator {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 1rem 0;
              & > div {
                margin: 0 0.5rem;
              }
            }
            .week-calendar {
              display: flex;
            }
            .date-calendar {
              width: 2rem;
              height: 2rem;
              background-color: rgba(0, 0, 0, 0.3);
              border: 0.1rem solid green;
              display: flex;
              justify-content: center;
              align-items: center;
              &.selected {
                background-color: rgba(0, 255, 0, 0.3);
              }
            }
          }
        `}
      >
        <FCCalendar
          date={startDate}
          setDate={(date?: Date | null) => setStartDate(date ? date : undefined)}
          endDate={endDate}
          setEndDate={(date?: Date | null) => setEndDate(date ? date : undefined)}
          rangeDate
          navigator
          dateinput
          dayColumns
        />
      </div>
    </div>
  );
};

export default Calendar;
