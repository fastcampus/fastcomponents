import type { PageInfo } from '@day1co/pebbles';
import React from 'react';

export interface PaginationProps extends Omit<PageInfo, 'offset'> {
  children?: React.ReactNode;
  className?: string;
}
