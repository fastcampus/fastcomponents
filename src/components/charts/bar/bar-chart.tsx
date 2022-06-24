import React, { useMemo } from 'react';
import { Bar } from '@ant-design/plots';
import { mergeConfig } from '../util';
import type { BarConfig, ChartProps, BarChartData } from '../../../types/charts.interface';

const defaultConfig: BarConfig = {
  data: [],
  xField: 'value',
  yField: 'label',
  color: '#5B8FF9',
  seriesField: 'label',
  legend: {
    position: 'top-left',
  },
};

const BarChart = ({ data, config }: ChartProps<BarChartData, BarConfig>) => {
  const mergedConfig = useMemo(() => mergeConfig({ data, defaultConfig, config }), [data, config]);

  return <Bar {...mergedConfig} />;
};

export default BarChart;
