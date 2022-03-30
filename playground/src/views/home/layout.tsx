import React from 'react';
import InputList from '../../components/input-list';
import Calendar from '../../components/calendar';
import Table from '../../components/table';
import Checkbox from '../../components/checkbox';
import Radio from '../../components/radio';
import Select from '../../components/select';
import Button from '../../components/button';
import FileUploader from '../../components/file-uploader';
import TabList from '../../components/tab-list';
import TextArea from '../../components/textarea';
import BpoCalendar from '../../components/bpo-calendar';
import styled from '@emotion/styled';

const Block = styled.div`
  padding: 5rem;
  border: 2px solid black;
`;
const HomeLayout = () => {
  return (
    <div>
      <h1>home</h1>
      <Block>
        <BpoCalendar />
      </Block>
      <InputList />
      <Calendar />
      <Table />
      <Checkbox />
      <Radio />
      <div>
        <h1 style={{ fontSize: '4rem' }}>Select size default</h1>
        <Select />
        <Select multiple={true} />
        <Select nativeSelect />
        <Select nativeSelect multiple={true} />
      </div>
      <div>
        <h1 style={{ fontSize: '4rem' }}>Select size=7 </h1>
        <Select size={7} />
        <Select multiple={true} size={7} />
        <Select nativeSelect size={7} />
        <Select nativeSelect multiple={true} size={7} />
        <h2>기본값 3 추가 (multiple)</h2>
        <Select initialSelectedValue={[2, 3]} multiple size={7} />
        <h2>기본값 3 추가 (multiple x)</h2>
        <Select initialSelectedValue={3} size={7} />
      </div>
      <Button />
      <FileUploader />
      <TabList />
      <TextArea />
    </div>
  );
};

export default HomeLayout;
