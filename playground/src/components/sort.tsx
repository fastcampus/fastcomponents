import React from 'react';
import { css } from '@emotion/react';
import { Sort as FCSort } from '../../../src';

const Sort = () => {
  return (
    <div
      css={css`
        .fc-sort {
          .asc {
            width: 10rem;
            height: 5rem;
            :before {
              content: 'ASC';
            }
          }
          .desc {
            width: 10rem;
            height: 5rem;
            :before {
              content: 'DESC';
            }
          }
          .none {
            width: 10rem;
            height: 5rem;
            :before {
              content: 'NONE';
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
