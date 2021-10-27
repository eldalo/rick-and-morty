import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import rickAndMorty from 'modules/rick-morty/reducer';

import routerHistory from './history';
import { rootPersistConfig } from './persistor';

const appReducer = combineReducers({
  router: connectRouter(routerHistory),
  rickAndMorty,
});

const actions = [];
const rootReducer = (state, action) => {
  if (actions.includes(action.type)) return appReducer({}, action);
  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
