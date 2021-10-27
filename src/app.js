import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'routes';
import routesConfig from 'routes/config';
// @ts-ignore
import { persistor, store } from 'store';
import history from 'store/history';

import GlobalLoading from 'views/ui/loading';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<GlobalLoading />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes store={store} routes={routesConfig} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
