import { ObjectUtil } from '@day1co/pebbles';
import { ChartProps } from '../../types/charts.interface';

interface MergeConfigProps<CData> {
  defaultConfig: {
    data: CData[];
  };
}

export const mergeConfig = <CData, CConfig>({
  data,
  defaultConfig,
  config,
}: MergeConfigProps<CData> & ChartProps<CData, CConfig>) => {
  defaultConfig.data.splice(0, defaultConfig.data.length);
  defaultConfig.data.push(...data);

  return (config ? ObjectUtil.merge(defaultConfig, config) : defaultConfig) as CConfig;
};
