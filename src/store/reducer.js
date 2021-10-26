import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';

import rickAndMorty from 'modules/rick-morty/reducer';

import { rootPersistConfig } from './persistor';
import routerHistory from './history';

const appReducer = combineReducers({
  router: connectRouter(routerHistory),
  rickAndMorty,
});

const actions = ['CLEAR_STORE'];
const rootReducer = (state, action) => {
  // @ts-ignore
  if (actions.includes(action.type)) return appReducer({}, action);
  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
