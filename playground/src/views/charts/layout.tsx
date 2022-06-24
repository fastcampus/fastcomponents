import React from 'react';
import styled from '@emotion/styled';
import { PieChart } from '../../../../src';
import type { PieChartData } from '../../../../src/types/charts.interface';

const ChartBlock = styled.section`
  width: 60rem;
  height: 60rem;
`;

const ChartLayout = () => {
  const data: PieChartData[] = [
    {
      label: '월요일',
      value: 26,
    },
    {
      label: '화요일',
      value: 24,
    },
    {
      label: '수요일',
      value: 17,
    },
    {
      label: '목요일',
      value: 14,
    },
    {
      label: '금요일',
      value: 9,
    },
    {
      label: '토요일',
      value: 6,
    },
    {
      label: '일요일',
      value: 4,
    },
  ];
  return (
    <section>
      <ChartBlock>
        <PieChart data={data} />
      </ChartBlock>
    </section>
  );
};

export default ChartLayout;
