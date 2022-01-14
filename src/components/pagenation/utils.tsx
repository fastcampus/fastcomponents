import type { Sort } from '../../types/pagenation.interface';

export const getCurrentOffset = () => {
  const params = new URLSearchParams(document.location.search);
  return Number(params.get('offset')) || 0;
};

export const setPagenationQueryString = (offset: number, sort: Sort) => {
  const queryStringArr: string[] = [];
  queryStringArr.push(`offset=${offset}`);
  if (sort) {
    queryStringArr.push(`sort=${sort}`);
  }
  if (queryStringArr.length === 0) return;

  const queryString = `?${queryStringArr.join('&')}`;
  history.replaceState({}, 'query-string', queryString);
};
