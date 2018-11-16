import { not, compose, has, anyPass } from 'ramda';

import {
  CALL_API_FAILURE,
  CALL_API_SUCCESS,
  CALL_API_REQUEST,
} from '../constants';

const reducerFactory = (filter, initialState = {}) => reducer => (
  state,
  action
) => {
  if (filter(action)) {
    return state || initialState;
  }

  return reducer(state, action);
};

export default reducerFactory;

export const createSuccessReducer = reducerFactory(
  compose(
    not,
    has(CALL_API_SUCCESS)
  )
);

export const createMetaReducer = reducerFactory(
  compose(
    not,
    anyPass([
      has(CALL_API_FAILURE),
      has(CALL_API_SUCCESS),
      has(CALL_API_REQUEST),
    ])
  )
);
