import React from 'react';
import type { TableProps } from '../../types/table.interface';

const Table = ({ head, body, className }: TableProps) => {
  return (
    <table className={`fc-table ${className}`}>
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Table;
