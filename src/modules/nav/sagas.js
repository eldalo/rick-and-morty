/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import {
  createMatchSelector,
  LOCATION_CHANGE,
  push,
} from 'connected-react-router';
import { put, select, takeEvery } from 'redux-saga/effects';
import routes from 'routes/config';
import { matchPath } from 'react-router-dom';
import queryString from 'qs';
import { getCurrentLocation, getFilters } from './selectors';
import { setUrlFilters, updateFiltersFromUrl } from './actions';

const flatRoutes = (data) => {
  return data.reduce((prev, el) => {
    prev.push(el);
    if (el.routes) {
      prev.push(...flatRoutes(el.routes));
    }
    return prev;
  }, []);
};

export function* locationChangeSage() {
  try {
    const paths = flatRoutes(routes);
    const currentLocation = yield select(getCurrentLocation);
    const matches = paths
      .filter((path) => path.path && path.path !== '*')
      .filter((path) => matchPath(currentLocation.pathname, path));

    if (!matches && matches.length === 0) return;

    const initialSearch = queryString.parse(currentLocation.search, {
      ignoreQueryPrefix: true,
    });
    const filters = matches
      .filter((match) => match.defaultFilters)
      .reduce((acc, current) => {
        Object.assign(acc, current.defaultFilters);
        return acc;
      }, {});

    const search = { ...filters, ...initialSearch };
    yield put(updateFiltersFromUrl(search));

    for (const match of matches) {
      const matchSelector = createMatchSelector(match.path);
      const paramsMatch = yield select(matchSelector);
      if (match.actions) {
        for (const action of match.actions) {
          yield put(action({ ...paramsMatch.params, ...search }));
        }
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function* setUrlFiltersSaga({ payload }) {
  try {
    const currentLocation = yield select(getCurrentLocation);
    const filters = yield select(getFilters);

    const newFilters = { ...filters, ...payload };

    const qs = queryString.stringify(newFilters);
    let path = currentLocation.pathname;

    if (qs) {
      path += `?${qs}`;
    }
    yield put(push(path));
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export default function* navWatch() {
  yield takeEvery(LOCATION_CHANGE, locationChangeSage);
  yield takeEvery(setUrlFilters.toString(), setUrlFiltersSaga);
}
