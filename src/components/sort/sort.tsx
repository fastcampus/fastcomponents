import React from 'react';
import type { SortBy, SortProps } from '../../types/sort.interface';

export const setPaginationQueryString = (sort?: SortBy) => {
  const params = new URLSearchParams(document.location.search);
  if (sort) {
    params.set('sort', String(sort));
  } else {
    params.delete('sort');
  }
  history.replaceState({}, 'query-string', `?${params.toString()}`);
};

const Sort = ({ className, ...restProps }: SortProps) => {
  return (
    <div className={`fc-sort ${className}`} {...restProps}>
      <button className="asc" onClick={() => setPaginationQueryString('ASC')}></button>
      <button className="desc" onClick={() => setPaginationQueryString('DESC')}></button>
      <button className="none" onClick={() => setPaginationQueryString()}></button>
    </div>
  );
};

export default Sort;
