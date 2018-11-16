import { pathOr, always, compose, map } from 'ramda';

import getResource from '../resources';

import createUrl from '../../utils/create-url';

const createResourceSelector = (defaults, path) => (resource, query) => {
  const resourceSpec = getResource(resource);

  if (!resourceSpec) {
    console.warn('Undefined resource', resource);
    return always(defaults);
  }

  return pathOr(defaults, [...path, createUrl(resourceSpec.url, query)]);
};

export const selectMeta = createResourceSelector(
  {
    fetching: false,
    fetched: null,
    error: null,
  },
  ['meta']
);

export const selectEntity = ({ entity, id }) =>
  pathOr(null, ['entities', entity, id]);

export const selectCollection = createResourceSelector([], ['collections']);

export const selectExpandedCollection = (resource, query) => state => {
  return compose(
    map(entity => selectEntity(entity)(state)),
    selectCollection(resource, query)
  )(state);
};
