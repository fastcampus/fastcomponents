import type { PieConfig } from '@ant-design/plots';

export { PieConfig };

export interface PieChartData {
  label: string;
  value: number;
}

export interface PieChartProps {
  data: PieChartData[];
  config?: PieConfig;
}
