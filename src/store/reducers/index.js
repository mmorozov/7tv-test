import { combineReducers } from 'redux';
import { createSuccessReducer, createMetaReducer } from './api';

import entities from './entities';
import meta from './meta';
import collection from './collection';

export default (additionalReducers = {}) => {
  const reducers = {
    meta: createMetaReducer(meta),
    entities: createSuccessReducer(entities),
    collections: createSuccessReducer(collection),
    ...additionalReducers,
  };

  return combineReducers(reducers);
};
