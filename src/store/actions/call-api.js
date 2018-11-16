import { join, compose, toUpper, curry, pipe } from 'ramda';

import { CALL_API } from '../constants';
import createURL from '../../utils/create-url';
import getResource from '../resources';

export const makeType = curry(
  compose(
    toUpper,
    join('.'),
    (resource, action) => [resource, action]
  )
);

const callAPI = (resource, query = {}, data) => {
  const resourceSpec = getResource(resource);

  if (!resourceSpec) {
    return {
      type: makeType('undefined')('resource'),
      resource,
    };
  }

  const type = makeType(resource);

  return {
    type: type('action'),
    [CALL_API]: {
      ...resourceSpec,
      query,
      data,
      url: createURL(resourceSpec.url, query),
      types: {
        success: type('success'),
        failure: type('failure'),
        request: type('request'),
      },
    },
  };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,
  callAPI: pipe(
    callAPI,
    dispatch
  ),
});

export default callAPI;
