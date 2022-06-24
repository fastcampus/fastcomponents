import React from 'react';
import styled from '@emotion/styled';
import { PieChart, BarChart, ColumnChart } from '../../../../src';
import type { PieChartData, BarChartData, ColumnChartData } from '../../../../src';

const ChartBlock = styled.section`
  width: 60rem;
  height: 60rem;
`;

const ChartLayout = () => {
  const PieChartData: PieChartData[] = [
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

  const BarChartData: BarChartData[] = [
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

  const ColumnChartData: ColumnChartData[] = [
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
      <span>Pie chart</span>
      <ChartBlock>
        <PieChart data={PieChartData} />
      </ChartBlock>

      <span>Bar chart</span>
      <ChartBlock>
        <BarChart data={BarChartData} />
      </ChartBlock>

      <span>Column chart</span>
      <ChartBlock>
        <ColumnChart data={ColumnChartData} />
      </ChartBlock>
    </section>
  );
};

export default ChartLayout;
