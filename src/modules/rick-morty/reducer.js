/* eslint-disable no-param-reassign */
import produce from 'immer';
import { listProfiles, viewProfile } from './actions';

const initialState = {
  loading: false,
  error: null,
  items: [],
  item: null,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case listProfiles.TRIGGER:
    case viewProfile.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;
    case listProfiles.SUCCESS:
      draft.items = payload;
      break;
    case viewProfile.SUCCESS:
      draft.item = payload;
      break;
    case listProfiles.FAILURE:
    case viewProfile.FAILURE:
      draft.error = payload;
      break;
    case listProfiles.FULFILL:
    case viewProfile.FULFILL:
      draft.loading = false;
      break;
    // no default
  }
}, initialState);

export default reducer;
