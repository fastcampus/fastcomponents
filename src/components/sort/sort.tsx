import React from 'react';
import type { SortBy } from '../../types/sort.interface';

export const setPaginationQueryString = (sort?: SortBy) => {
  const params = new URLSearchParams(document.location.search);
  if (sort) {
    params.set('sort', String(sort));
  } else {
    params.delete('sort');
  }
  history.replaceState({}, 'query-string', `?${params.toString()}`);
};

const Sort = () => {
  return (
    <div className="fc-sort">
      <button className="asc" onClick={() => setPaginationQueryString('ASC')}></button>
      <button className="desc" onClick={() => setPaginationQueryString('DESC')}></button>
      <button className="none" onClick={() => setPaginationQueryString()}></button>
    </div>
  );
};

export default Sort;
