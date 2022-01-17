import React from 'react';
import { css } from '@emotion/react';
import { Sort as FCSort } from '../../../src';

const Sort = () => {
  return (
    <div
      css={css`
        .fc-sort {
          button:first-child {
            width: 10rem;
            height: 5rem;
            :before {
              content: 'ASC';
            }
          }
          button:last-child {
            width: 10rem;
            height: 5rem;
            :before {
              content: 'DESC';
            }
          }
        }
      `}
    >
      <FCSort />
    </div>
  );
};

export default Sort;
