import React from 'react';
import type { SortBy } from '../../types/sort.interface';

export const setPaginationQueryString = (sort: SortBy) => {
  const params = new URLSearchParams(document.location.search);
  params.set('sort', String(sort));
  history.replaceState({}, 'query-string', `?${params.toString()}`);
};

const Sort = () => {
  return (
    <div className="fc-sort">
      <button onClick={() => setPaginationQueryString('ASC')}></button>
      <button onClick={() => setPaginationQueryString('DESC')}></button>
    </div>
  );
};

export default Sort;
