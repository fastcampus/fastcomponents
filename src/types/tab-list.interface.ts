export type SortBy = 'ASC' | 'DESC';

export type Tab = {
  name: string;
  [key: string]: string;
};

export interface TabListProps {
  className?: string;
  tabList: Tab[];
  selectedTab: Tab;
  onTabClick: (tab: Tab) => void;
}
