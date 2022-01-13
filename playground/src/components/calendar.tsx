import React from 'react';
import { css } from '@emotion/react';
import FastcompCalendar from '../../../src/components/calendar';

const Calendar = () => {
  return (
    <div
      css={css`
        .fastcomp-week-calendar {
          display: flex;
        }
        .fastcomp-date-calendar {
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
      `}
    >
      <FastcompCalendar />
    </div>
  );
};

export default Calendar;
