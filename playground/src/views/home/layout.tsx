import React from 'react';
import InputList from '../../components/input-list';
import Calendar from '../../components/calendar';
import Table from '../../components/table';

const HomeLayout = () => {
  return (
    <div>
      <h1>home</h1>
      <InputList />
      <Calendar />
      <Table />
    </div>
  );
};

export default HomeLayout;
