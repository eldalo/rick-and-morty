import { createAction } from 'redux-actions';
import { SET_URL_FILTERS, UPDATE_URLFILTERS } from './types';

export const setUrlFilters = createAction(SET_URL_FILTERS);
export const updateFiltersFromUrl = createAction(UPDATE_URLFILTERS);
