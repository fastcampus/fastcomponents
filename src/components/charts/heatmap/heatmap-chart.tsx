import React, { useMemo } from 'react';
import { Heatmap } from '@ant-design/plots';
import { mergeConfig } from '../util';
import type { HeatmapConfig, ChartProps, HeatmapChartData } from '../../../types/charts.interface';

const defaultConfig: HeatmapConfig = {
  autoFit: false,
  data: [],
  xField: 'xLabel',
  yField: 'yLabel',
  colorField: 'value',
};

const HeatmapChart = ({ data, config }: ChartProps<HeatmapChartData, HeatmapConfig>) => {
  const mergedConfig = useMemo(() => mergeConfig({ data, defaultConfig, config }), [data, config]);

  return <Heatmap {...mergedConfig} />;
};

export default HeatmapChart;
