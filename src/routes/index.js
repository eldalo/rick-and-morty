import React from 'react';
import { Route, Switch } from 'react-router-dom';

const RouteGlobal = ({
  component: Component,
  exact,
  path,
  routes,
  store,
  ...rest
}) => {
  const RouteApp = Route;
  if (routes) {
    return (
      <RouteApp
        exact={exact}
        path={path}
        render={(props) => (
          <Component {...props} {...rest}>
            <Switch>
              {routes.map((route) => (
                <RouteGlobal key={route.path} store={store} {...route} />
              ))}
            </Switch>
          </Component>
        )}
      />
    );
  }

  return (
    <RouteApp
      exact={exact}
      path={path}
      render={(props) => <Component {...props} {...rest} />}
    />
  );
};

const RouteConfig = ({ routes, store }) => (
  <Switch>
    {routes.map((route) => (
      <RouteGlobal key={route.path} store={store} {...route} />
    ))}
  </Switch>
);

export default RouteConfig;
