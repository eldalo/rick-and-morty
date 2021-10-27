/* eslint-disable no-param-reassign */
import produce from 'immer';
import { listProfiles, getProfile } from './actions';

const initialState = {
  loading: false,
  error: null,
  items: [],
  item: null,
  pageNext: null,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case listProfiles.TRIGGER:
    case getProfile.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;
    case listProfiles.SUCCESS:
      draft.items = payload.data;
      draft.pageNext = payload.next;
      break;
    case getProfile.SUCCESS:
      draft.item = payload;
      break;
    case listProfiles.FAILURE:
    case getProfile.FAILURE:
      draft.error = payload;
      break;
    case listProfiles.FULFILL:
    case getProfile.FULFILL:
      draft.loading = false;
      break;
    // no default
  }
}, initialState);

export default reducer;
