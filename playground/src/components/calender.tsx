import React from 'react';
import { css } from '@emotion/react';
import FastcompCalender from '../../../src/components/calender';

const Calender = () => {
  return (
    <div
      css={css`
        .fastcomp-week-calender {
          display: flex;
        }
        .fastcomp-date-calender {
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
      <FastcompCalender />
    </div>
  );
};

export default Calender;
