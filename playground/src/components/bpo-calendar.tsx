import React from 'react';
import { css } from '@emotion/react';
import { Calendar as FCCalendar } from '../../../src';

const BpoCalendar = () => {
  return (
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
            &.selected-range {
              background-color: gold;
            }
          }
        }
      `}
    >
      <FCCalendar rangeDate navigator />
    </div>
  );
};

export default BpoCalendar;
