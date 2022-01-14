import type { PageInfo } from '@day1co/pebbles';

export type Sort = 'ASC' | 'DESC' | null;
export interface PaginationProps extends Omit<PageInfo, 'offset'> {
  sort?: Sort;
}
