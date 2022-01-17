export const getCurrentOffset = () => {
  const params = new URLSearchParams(document.location.search);
  return Number(params.get('offset')) || 0;
};

export const setPaginationQueryString = (offset: number) => {
  const params = new URLSearchParams(document.location.search);
  params.set('offset', String(offset));
  history.replaceState({}, 'query-string', `?${params.toString()}`);
};
