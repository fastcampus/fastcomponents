import React from 'react';
import InputList from '../../components/input-list';
import Calendar from '../../components/calendar';
import Table from '../../components/table';
import Checkbox from '../../components/checkbox';

const HomeLayout = () => {
  return (
    <div>
      <h1>home</h1>
      <InputList />
      <Calendar />
      <Table />
      <Checkbox />
    </div>
  );
};

export default HomeLayout;
