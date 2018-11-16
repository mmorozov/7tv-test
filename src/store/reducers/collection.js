import { merge, path } from 'ramda';

import { CALL_API_SUCCESS } from '../constants';

const extract = path([CALL_API_SUCCESS, 'payload', 'result']);
const extractKey = path(['meta', 'url']);

export default (state, action) => {
  const collection = extract(action);

  if (!collection || !Array.isArray(collection)) {
    return state;
  }

  const key = extractKey(action);

  return merge(state, {
    [key]: collection,
  });
};
