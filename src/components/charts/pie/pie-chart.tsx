import React, { useMemo } from 'react';
import { Pie } from '@ant-design/plots';
import { ObjectUtil } from '@day1co/pebbles';
import type { PieConfig, PieChartProps } from '../../../types/charts.interface';

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

const mergeConfig = ({ data, config }: PieChartProps) => {
  defaultConfig.data.splice(0, defaultConfig.data.length);
  defaultConfig.data.push(...data);
  return config ? ObjectUtil.merge(defaultConfig, config) : defaultConfig;
};

const PieChart = ({ data, config }: PieChartProps) => {
  const mergedConfig = useMemo<PieConfig>(() => mergeConfig({ data, config }) as PieConfig, [data, config]);

  return <Pie {...mergedConfig} />;
};

export default PieChart;
