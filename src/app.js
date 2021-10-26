import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'routes';
import routesConfig from 'routes/config';
import { persistor, store } from 'store';
import history from 'store/history';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes store={store} routes={routesConfig} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
