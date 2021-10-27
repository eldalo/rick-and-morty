import { createSelector } from 'reselect';

export const getRouter = (state) => state.router;
export const getNav = (state) => state.nav;
export const getCurrentLocation = createSelector(
  getRouter,
  (router) => router.location
);

export const getFilters = createSelector(getNav, (nav) => nav.filters);
export const getPrevFilters = createSelector(getNav, (nav) => nav.prevFilters);
