import React from 'react';
import Pagination from '../../components/pagination';
import Sort from '../../components/sort';

const PaginationLayout = () => {
  return (
    <div>
      <h1>pagination</h1>
      <Pagination />
      <Sort />
    </div>
  );
};

export default PaginationLayout;
