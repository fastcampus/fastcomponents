import React from 'react';
import InputList from '../../components/input-list';
import Calendar from '../../components/calendar';
import Table from '../../components/table';
import Checkbox from '../../components/checkbox';
import Radio from '../../components/radio';
import Select from '../../components/select';
import Button from '../../components/button';
import FileUploader from '../../components/file-uploader';

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
        <Select nativeSelect={false} />
        <Select nativeSelect={false} multiple={true} />
        <Select nativeSelect={true} />
        <Select nativeSelect={true} multiple={true} />
      </div>
      <div>
        <h1 style={{ fontSize: '4rem' }}>Select size=7 </h1>
        <Select nativeSelect={false} size={7} />
        <Select nativeSelect={false} multiple={true} size={7} />
        <Select nativeSelect={true} size={7} />
        <Select nativeSelect={true} multiple={true} size={7} />
      </div>
      <Button />
      <FileUploader />
    </div>
  );
};

export default HomeLayout;
