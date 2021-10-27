/* eslint-disable no-param-reassign */
import produce from 'immer';
import { updateFiltersFromUrl } from './actions';

const initialState = {
  filters: {},
  prevFilters: {},
};

export default produce((draft, action) => {
  switch (action.type) {
    case updateFiltersFromUrl.toString():
      draft.prevFilters = draft.filters;
      draft.filters = action.payload;
      break;
    // no default
  }
}, initialState);
