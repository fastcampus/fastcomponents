import React, { useMemo } from 'react';
import { Column } from '@ant-design/plots';
import { mergeConfig } from '../util';
import type { ColumnConfig, ChartProps, ColumnChartData } from '../../../types/charts.interface';

const defaultConfig: ColumnConfig = {
  data: [],
  xField: 'label',
  yField: 'value',
  label: {
    position: 'middle',
    // 'top', 'bottom', 'middle',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
};

const ColumnChart = ({ data, config }: ChartProps<ColumnChartData, ColumnConfig>) => {
  const mergedConfig = useMemo(() => mergeConfig({ data, defaultConfig, config }), [data, config]);

  return <Column {...mergedConfig} />;
};

export default ColumnChart;
