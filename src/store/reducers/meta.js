import { mergeDeepRight, path, either, compose } from 'ramda';

import {
  CALL_API_SUCCESS,
  CALL_API_FAILURE,
  CALL_API_REQUEST,
} from '../constants';

const extractMeta = compose(
  path(['meta']),
  either(
    either(path([CALL_API_SUCCESS]), path([CALL_API_FAILURE])),
    path([CALL_API_REQUEST])
  )
);

const extractKey = path(['meta', 'url']);

export default (state, action) => {
  const key = extractKey(action);

  return mergeDeepRight(state, {
    [key]: extractMeta(action),
  });
};
