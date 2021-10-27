import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from './history';
import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
    : compose;

const middlewares = [sagaMiddleware, routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(reducer, composeEnhancers(...enhancers));
const persistor = persistStore(store);
sagaMiddleware.run(saga);

export { store, persistor };
