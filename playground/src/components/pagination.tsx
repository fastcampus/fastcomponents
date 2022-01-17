import React from 'react';
import { css } from '@emotion/react';
import { Pagination as FCPagination } from '../../../src';

const Pagination = () => {
  return (
    <div
      css={css`
        .fc-pagination {
          border: 0.1rem solid black;
          display: flex;
          & > button {
            font-size: 3rem;
            padding: 0.2rem;
            margin: 0.5rem;
            border: 0.1rem solid green;
            cursor: pointer;
          }

          .page-number-list {
            display: flex;
            & > span {
              display: flex;
              border: 0.1rem solid black;
              padding: 0.5rem;
              font-size: 2rem;
              cursor: pointer;
            }
          }

          .active {
            background-color: rgba(0, 255, 0, 0.3);
          }

          .first-btn {
            &:before {
              content: '<<';
            }
          }
          .prev-btn {
            &:before {
              content: '<';
            }
          }
          .next-btn {
            &:before {
              content: '>';
            }
          }
          .last-btn {
            &:before {
              content: '>>';
            }
          }
        }
      `}
    >
      <FCPagination count={165} limit={10} range={2} />
    </div>
  );
};

export default Pagination;
