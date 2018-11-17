import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import createAPIMiddleWare from './middleware/api';

export default apiHost =>
  createStore(
    reducers(),
    applyMiddleware(
      createLogger({
        predicate: () => process.env.NODE_ENV === 'development',
      }),
      createAPIMiddleWare(apiHost)
    )
  );
