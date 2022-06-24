import type { PieConfig, BarConfig, ColumnConfig, HeatmapConfig } from '@ant-design/plots';

export { PieConfig, BarConfig, ColumnConfig, HeatmapConfig };

export interface PieChartData {
  label: string;
  value: number;
}

export interface BarChartData {
  label: string;
  value: number;
}

export interface ColumnChartData {
  label: string;
  value: number;
}

export interface HeatmapChartData {
  xLabel: string;
  yLabel: string;
  value: number;
}

export interface ChartProps<CData, CConfig> {
  data: CData[];
  config?: Partial<CConfig>;
}
