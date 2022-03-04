import type { PageInfo } from '@day1co/pebbles';
import React from 'react';

export interface PaginationProps extends Omit<PageInfo, 'offset'> {
  firstIcon?: React.ReactNode | string;
  lastIcon?: React.ReactNode | string;
  prevIcon?: React.ReactNode | string;
  nextIcon?: React.ReactNode | string;
  className?: string;
}
