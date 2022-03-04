import React, { useState, useEffect } from 'react';
import { MiscUtil } from '@day1co/pebbles';
import { getCurrentOffset, setPaginationQueryString } from './utils';
import type { PaginationProps } from '../../types/pagination.interface';

const Pagination = ({
  count,
  limit,
  range,
  className,
  firstIcon,
  lastIcon,
  prevIcon,
  nextIcon,
  firstPage = 1,
}: PaginationProps) => {
  const [offset, setOffset] = useState(getCurrentOffset());

  useEffect(() => {
    setPaginationQueryString(offset);
  }, [offset]);

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
    <div className={`fc-pagination ${className}`}>
      <button className="first-btn" onClick={goToFirst}>
        {firstIcon ? firstIcon : '<<'}
      </button>
      <button className="prev-btn" onClick={goToPrev}>
        {prevIcon ? prevIcon : '<'}
      </button>
      <div className="page-number-list">
        {pages.map(({ page, active }) => (
          <span key={page} className={`${active && 'active'}`} onClick={goToPage(page)}>
            {page}
          </span>
        ))}
      </div>
      <button className="next-btn" onClick={goToNext}>
        {nextIcon ? nextIcon : '>'}
      </button>
      <button className="last-btn" onClick={goToLast}>
        {lastIcon ? lastIcon : '>>'}
      </button>
    </div>
  );
};

export default Pagination;
