import React from 'react';
import { css } from '@emotion/react';
import { Table as FCTable } from '../../../src';

const Table = () => {
  return (
    <div
      css={css`
        .fc-table {
          border: 0.1rem solid black;
        }
      `}
    >
      <FCTable>
        <>
          <th>제목</th>
          <th>내용</th>
          <th>비고</th>
        </>
        <>
          <tr>
            <td>패스트캠퍼스</td>
            <td>패스트캠퍼스 내용입니다.</td>
            <td>없음</td>
          </tr>
          <tr>
            <td>패스트캠퍼스</td>
            <td>패스트캠퍼스 내용입니다.</td>
            <td>없음</td>
          </tr>
          <tr>
            <td>패스트캠퍼스</td>
            <td>패스트캠퍼스 내용입니다.</td>
            <td>없음</td>
          </tr>
        </>
      </FCTable>
    </div>
  );
};

export default Table;
