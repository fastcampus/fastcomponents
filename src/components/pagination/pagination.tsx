import React, { useState, useEffect } from 'react';
import { MiscUtil } from '@day1co/pebbles';
import { getCurrentOffset, setPaginationQueryString } from './utils';
import type { PaginationProps } from '../../types/pagination.interface';

const Pagination = ({ count, limit, range, firstPage = 1, sort = null }: PaginationProps) => {
  const [offset, setOffset] = useState(getCurrentOffset());

  useEffect(() => {
    setPaginationQueryString(offset, sort);
  }, [offset, sort]);

  const { lastPage, currentPage, pages } = MiscUtil.getPagination({
    count,
    limit,
    offset,
    range,
    firstPage,
  });

  const goToNext = () => {
    if (currentPage === lastPage) return;
    setOffset(limit * currentPage);
  };
  const goToPrev = () => {
    if (currentPage === firstPage) return;
    setOffset(limit * (currentPage - 2));
  };
  const goToFirst = () => {
    setOffset(0);
  };
  const goToLast = () => {
    setOffset(limit * (lastPage - 1));
  };
  const goToPage = (page: number) => () => {
    setOffset(limit * (page - 1));
  };

  return (
    <div className="fc-pagination">
      <button className="first-btn" onClick={goToFirst}></button>
      <button className="prev-btn" onClick={goToPrev}></button>
      <div className="page-number-list">
        {pages.map(({ page, active }) => (
          <span key={page} className={`${active && 'active'}`} onClick={goToPage(page)}>
            {page}
          </span>
        ))}
      </div>
      <button className="next-btn" onClick={goToNext}></button>
      <button className="last-btn" onClick={goToLast}></button>
    </div>
  );
};

export default Pagination;