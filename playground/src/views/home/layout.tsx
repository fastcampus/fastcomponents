import React from 'react';
import InputList from '../../components/input-list';
import Calendar from '../../components/calendar';
import Table from '../../components/table';
import Checkbox from '../../components/checkbox';
import Radio from '../../components/radio';
import Select from '../../components/select';

const HomeLayout = () => {
  return (
    <div>
      <h1>home</h1>
      <InputList />
      <Calendar />
      <Table />
      <Checkbox />
      <Radio />
      <div>
        <h1 style={{ fontSize: '4rem' }}>Select size default</h1>
        <Select isOptionUse={false} />
        <Select isOptionUse={false} multiple={true} />
        <Select isOptionUse={true} />
        <Select isOptionUse={true} multiple={true} />
      </div>
      <div>
        <h1 style={{ fontSize: '4rem' }}>Select size=7 </h1>
        <Select isOptionUse={false} size={7} />
        <Select isOptionUse={false} multiple={true} size={7} />
        <Select isOptionUse={true} size={7} />
        <Select isOptionUse={true} multiple={true} size={7} />
      </div>
    </div>
  );
};

export default HomeLayout;
