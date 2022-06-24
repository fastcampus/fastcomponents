import type { PieConfig, BarConfig, ColumnConfig } from '@ant-design/plots';

export { PieConfig, BarConfig, ColumnConfig };

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

export interface ChartProps<CData, CConfig> {
  data: CData[];
  config?: CConfig;
}
