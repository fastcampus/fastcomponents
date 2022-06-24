import React from 'react';
import styled from '@emotion/styled';
import { PieChart, BarChart, ColumnChart, HeatmapChart } from '../../../../src';
import type { PieChartData, BarChartData, ColumnChartData, HeatmapChartData } from '../../../../src';

const ChartPlayground = styled.section`
  & .chart-title {
    font-size: 3rem;
  }
`;

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

  const HeatmapChartData: HeatmapChartData[] = [
    {
      xLabel: '00:00',
      yLabel: '일',
      value: 1,
    },
    {
      xLabel: '00:00',
      yLabel: '토',
      value: 1,
    },
    {
      xLabel: '00:00',
      yLabel: '금',
      value: 1,
    },
    {
      xLabel: '00:00',
      yLabel: '목',
      value: 1,
    },
    {
      xLabel: '00:00',
      yLabel: '수',
      value: 1,
    },
    {
      xLabel: '00:00',
      yLabel: '화',
      value: 1,
    },
    {
      xLabel: '00:00',
      yLabel: '월',
      value: 1,
    },
    {
      xLabel: '02:00',
      yLabel: '일',
      value: 5,
    },
    {
      xLabel: '02:00',
      yLabel: '토',
      value: 5,
    },
    {
      xLabel: '02:00',
      yLabel: '금',
      value: 5,
    },
    {
      xLabel: '02:00',
      yLabel: '목',
      value: 5,
    },
    {
      xLabel: '02:00',
      yLabel: '수',
      value: 5,
    },
    {
      xLabel: '02:00',
      yLabel: '화',
      value: 5,
    },
    {
      xLabel: '02:00',
      yLabel: '월',
      value: 5,
    },
    {
      xLabel: '04:00',
      yLabel: '일',
      value: 10,
    },
    {
      xLabel: '04:00',
      yLabel: '토',
      value: 10,
    },
    {
      xLabel: '04:00',
      yLabel: '금',
      value: 10,
    },
    {
      xLabel: '04:00',
      yLabel: '목',
      value: 10,
    },
    {
      xLabel: '04:00',
      yLabel: '수',
      value: 10,
    },
    {
      xLabel: '04:00',
      yLabel: '화',
      value: 10,
    },
    {
      xLabel: '04:00',
      yLabel: '월',
      value: 10,
    },
    {
      xLabel: '06:00',
      yLabel: '일',
      value: 15,
    },
    {
      xLabel: '06:00',
      yLabel: '토',
      value: 15,
    },
    {
      xLabel: '06:00',
      yLabel: '금',
      value: 15,
    },
    {
      xLabel: '06:00',
      yLabel: '목',
      value: 15,
    },
    {
      xLabel: '06:00',
      yLabel: '수',
      value: 15,
    },
    {
      xLabel: '06:00',
      yLabel: '화',
      value: 15,
    },
    {
      xLabel: '06:00',
      yLabel: '월',
      value: 15,
    },
    {
      xLabel: '08:00',
      yLabel: '일',
      value: 20,
    },
    {
      xLabel: '08:00',
      yLabel: '토',
      value: 20,
    },
    {
      xLabel: '08:00',
      yLabel: '금',
      value: 20,
    },
    {
      xLabel: '08:00',
      yLabel: '목',
      value: 20,
    },
    {
      xLabel: '08:00',
      yLabel: '수',
      value: 20,
    },
    {
      xLabel: '08:00',
      yLabel: '화',
      value: 20,
    },
    {
      xLabel: '08:00',
      yLabel: '월',
      value: 20,
    },
    {
      xLabel: '10:00',
      yLabel: '일',
      value: 80,
    },
    {
      xLabel: '10:00',
      yLabel: '토',
      value: 80,
    },
    {
      xLabel: '10:00',
      yLabel: '금',
      value: 80,
    },
    {
      xLabel: '10:00',
      yLabel: '목',
      value: 80,
    },
    {
      xLabel: '10:00',
      yLabel: '수',
      value: 80,
    },
    {
      xLabel: '10:00',
      yLabel: '화',
      value: 80,
    },
    {
      xLabel: '10:00',
      yLabel: '월',
      value: 80,
    },
    {
      xLabel: '12:00',
      yLabel: '일',
      value: 10,
    },
    {
      xLabel: '12:00',
      yLabel: '토',
      value: 10,
    },
    {
      xLabel: '12:00',
      yLabel: '금',
      value: 10,
    },
    {
      xLabel: '12:00',
      yLabel: '목',
      value: 10,
    },
    {
      xLabel: '12:00',
      yLabel: '수',
      value: 10,
    },
    {
      xLabel: '12:00',
      yLabel: '화',
      value: 10,
    },
    {
      xLabel: '12:00',
      yLabel: '월',
      value: 10,
    },
    {
      xLabel: '14:00',
      yLabel: '일',
      value: 50,
    },
    {
      xLabel: '14:00',
      yLabel: '토',
      value: 50,
    },
    {
      xLabel: '14:00',
      yLabel: '금',
      value: 50,
    },
    {
      xLabel: '14:00',
      yLabel: '목',
      value: 50,
    },
    {
      xLabel: '14:00',
      yLabel: '수',
      value: 50,
    },
    {
      xLabel: '14:00',
      yLabel: '화',
      value: 50,
    },
    {
      xLabel: '14:00',
      yLabel: '월',
      value: 50,
    },
    {
      xLabel: '16:00',
      yLabel: '일',
      value: 3,
    },
    {
      xLabel: '16:00',
      yLabel: '토',
      value: 3,
    },
    {
      xLabel: '16:00',
      yLabel: '금',
      value: 3,
    },
    {
      xLabel: '16:00',
      yLabel: '목',
      value: 3,
    },
    {
      xLabel: '16:00',
      yLabel: '수',
      value: 3,
    },
    {
      xLabel: '16:00',
      yLabel: '화',
      value: 3,
    },
    {
      xLabel: '16:00',
      yLabel: '월',
      value: 3,
    },
    {
      xLabel: '18:00',
      yLabel: '일',
      value: 300,
    },
    {
      xLabel: '18:00',
      yLabel: '토',
      value: 300,
    },
    {
      xLabel: '18:00',
      yLabel: '금',
      value: 300,
    },
    {
      xLabel: '18:00',
      yLabel: '목',
      value: 300,
    },
    {
      xLabel: '18:00',
      yLabel: '수',
      value: 300,
    },
    {
      xLabel: '18:00',
      yLabel: '화',
      value: 300,
    },
    {
      xLabel: '18:00',
      yLabel: '월',
      value: 300,
    },
    {
      xLabel: '20:00',
      yLabel: '일',
      value: 170,
    },
    {
      xLabel: '20:00',
      yLabel: '토',
      value: 170,
    },
    {
      xLabel: '20:00',
      yLabel: '금',
      value: 170,
    },
    {
      xLabel: '20:00',
      yLabel: '목',
      value: 170,
    },
    {
      xLabel: '20:00',
      yLabel: '수',
      value: 170,
    },
    {
      xLabel: '20:00',
      yLabel: '화',
      value: 170,
    },
    {
      xLabel: '20:00',
      yLabel: '월',
      value: 170,
    },
    {
      xLabel: '22:00',
      yLabel: '일',
      value: 10,
    },
    {
      xLabel: '22:00',
      yLabel: '토',
      value: 10,
    },
    {
      xLabel: '22:00',
      yLabel: '금',
      value: 10,
    },
    {
      xLabel: '22:00',
      yLabel: '목',
      value: 10,
    },
    {
      xLabel: '22:00',
      yLabel: '수',
      value: 10,
    },
    {
      xLabel: '22:00',
      yLabel: '화',
      value: 10,
    },
    {
      xLabel: '22:00',
      yLabel: '월',
      value: 10,
    },
  ];

  return (
    <ChartPlayground>
      <span className="chart-title">Pie chart</span>
      <ChartBlock>
        <PieChart data={PieChartData} />
      </ChartBlock>

      <span className="chart-title">Bar chart</span>
      <ChartBlock>
        <BarChart data={BarChartData} />
      </ChartBlock>

      <span className="chart-title">Column chart</span>
      <ChartBlock>
        <ColumnChart data={ColumnChartData} />
      </ChartBlock>

      <span className="chart-title">Heatmap chart</span>
      <ChartBlock>
        <HeatmapChart data={HeatmapChartData} />
      </ChartBlock>
    </ChartPlayground>
  );
};

export default ChartLayout;
