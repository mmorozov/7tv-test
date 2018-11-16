import { mergeDeepRight, path } from 'ramda';

import { CALL_API_SUCCESS } from '../constants';

const extract = path([CALL_API_SUCCESS, 'payload', 'entities']);

export default (state, action) => {
  const entities = extract(action);

  if (!entities || !Object.keys(entities).length) {
    return state;
  }

  return mergeDeepRight(state, extract(action));
};
