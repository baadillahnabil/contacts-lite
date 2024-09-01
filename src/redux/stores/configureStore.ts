import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from '@redux/reducers';

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const logger = createLogger({ collapsed: true });

  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
  );

  return store;
};
