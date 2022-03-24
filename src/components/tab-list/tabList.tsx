import React from 'react';
import type { TabListProps } from '../../types/tab-list.interface';

const TabList = ({ className, tabList, selectedTab, onTabClick, ...restProps }: TabListProps) => {
  return (
    <div className={`fc-tab-list ${className}`} {...restProps}>
      {tabList.map((tab) => {
        return (
          <div
            className={`tab ${selectedTab.name === tab.name ? 'selected' : ''}`}
            key={tab.name}
            onClick={() => onTabClick(tab)}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default TabList;
