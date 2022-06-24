import React, { useMemo } from 'react';
import { Pie } from '@ant-design/plots';
import { mergeConfig } from '../util';
import type { PieConfig, PieChartData, ChartProps } from '../../../types/charts.interface';

const defaultConfig: PieConfig = {
  appendPadding: 10,
  data: [],
  angleField: 'value',
  colorField: 'label',
  radius: 1,
  label: {
    type: 'inner',
    offset: '-10%',
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: 'center',
    },
  },
  interactions: [
    {
      type: 'element-active',
    },
  ],
};

const PieChart = ({ data, config }: ChartProps<PieChartData, PieConfig>) => {
  const mergedConfig = useMemo(() => mergeConfig({ data, defaultConfig, config }), [data, config]);

  return <Pie {...mergedConfig} />;
};

export default PieChart;
