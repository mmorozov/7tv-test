import { has, pathOr, path, omit, prop, compose } from 'ramda';
import axios from 'axios';

import {
  CALL_API,
  CALL_API_SUCCESS,
  CALL_API_FAILURE,
  CALL_API_REQUEST,
} from '../constants';

import checkCache from './cache';

const isCallAPIRequest = has(CALL_API);

const payload = pathOr([], ['data']);
const errorPayload = compose(
  omit(['config', 'request']),
  prop('response')
);

export default apiHost => ({ dispatch, getState }) => {
  return next => {
    return action => {
      if (!isCallAPIRequest(action)) {
        return next(action);
      }

      const {
        url,
        query,
        method = 'get',
        cache,
        types,
        data,
        transform,
        call,
        ...options
      } = path([CALL_API], action);

      if (method === 'get' && checkCache(cache)(getState(), url, query)) {
        return Promise.resolve();
      }

      const actionMeta = {
        url,
        method,
        query,
        options,
      };

      dispatch({
        type: types.request,
        meta: actionMeta,
        [CALL_API_REQUEST]: {
          meta: {
            fetching: true,
            fetched: null,
            error: null,
          },
        },
      });

      return axios({
        method,
        url: `${apiHost}${url}`,
        data,
      })
        .then(response => {
          dispatch({
            type: types.success,
            meta: actionMeta,
            [CALL_API_SUCCESS]: {
              payload: !!transform
                ? transform(payload(response))
                : payload(response),
              meta: {
                fetching: false,
                fetched: true,
                error: null,
              },
            },
          });

          return payload(response);
        })
        .catch(error => {
          const response = errorPayload(error);
          dispatch({
            type: types.failure,
            meta: actionMeta,
            [CALL_API_FAILURE]: {
              meta: {
                fetching: false,
                fetched: true,
                error: response,
              },
            },
          });

          return Promise.reject(response);
        });
    };
  };
};
