import React from 'react';
import type { TableProps } from '../../types/table.interface';

const Table = ({ head, body }: TableProps) => {
  return (
    <table className="fc-table">
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Table;
