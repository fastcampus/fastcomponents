import React from 'react';
import type { TableProps } from '../../types/table.interface';
const Table = ({ children }: TableProps) => {
  if (!children) {
    throw new Error('insert children!');
  }

  return (
    <table className="fc-table">
      <thead>
        <tr>{children[0]}</tr>
      </thead>
      <tbody>{children[1]}</tbody>
    </table>
  );
};

export default Table;
