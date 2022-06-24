import type { PieConfig, BarConfig } from '@ant-design/plots';

export { PieConfig, BarConfig };

export interface PieChartData {
  label: string;
  value: number;
}

export interface BarChartData {
  label: string;
  value: number;
}

export interface ChartProps<CData, CConfig> {
  data: CData[];
  config?: CConfig;
}
