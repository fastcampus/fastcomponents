import React, { useState } from 'react';
import { css } from '@emotion/react';
import type { Tab } from '../../../src';
import { TabList as FCTabList } from '../../../src';
import { useNavigate, Outlet } from 'react-router-dom';

const TabList = () => {
  const tabList: Tab[] = [
    {
      name: '코스정보',
      slug: 'course',
    },
    {
      name: '강의정보',
      slug: 'lecture',
    },
    {
      name: '시험정보',
      slug: 'exam',
    },
  ];
  const [selectedTab, setSelectedTab] = useState<Tab>({ name: '', slug: '' });
  const navigate = useNavigate();
  const setTabNUrl = (tab: Tab) => {
    setSelectedTab(tab);
    navigate(tab.slug);
  };

  return (
    <div
      css={css`
        padding: 5rem;
        .fc-tab-list {
          display: flex;
          .tab {
            padding: 2rem;
            margin: 0.4rem;
            font-size: 2rem;
            border: 1px solid black;
            background-color: rgba(0, 0, 0, 0.1);
            cursor: pointer;
            &.selected {
              background-color: rgba(0, 255, 0, 0.1);
            }
          }
        }
      `}
    >
      <h1
        css={css`
          font-size: 2rem;
          margin-bottom: 2rem;
        `}
      >
        Tab List
      </h1>
      <FCTabList tabList={tabList} selectedTab={selectedTab} onTabClick={setTabNUrl} />
      <Outlet />
    </div>
  );
};

export default TabList;
