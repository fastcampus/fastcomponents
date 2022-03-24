import React from 'react';
import type { TableProps } from '../../types/table.interface';

const Table = ({ head, body, className, ...restProps }: TableProps) => {
  return (
    <table className={`fc-table ${className}`} {...restProps}>
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Table;
