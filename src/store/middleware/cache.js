import { pathOr, or } from 'ramda';

export const fetchingCache = (state, url) => {
  return pathOr(false, ['meta', url, 'fetching'], state);
};

export const infiniteCache = (state, url, params) => {
  return (
    !pathOr(false, ['force'], params) &&
    or(
      pathOr(false, ['meta', url, 'fetched'], state),
      pathOr(false, ['meta', url, 'fetching'], state)
    )
  );
};

export default cache => (cache ? infiniteCache : fetchingCache);
