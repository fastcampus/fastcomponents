import type { PageInfo } from '@day1co/pebbles';

export type Sort = 'ASC' | 'DESC' | null;
export interface PagenationProps extends Omit<PageInfo, 'offset'> {
  sort?: Sort;
}
