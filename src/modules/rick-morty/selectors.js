import { createSelector } from 'reselect';

export const getProfiles = (state) => state.rickAndMorty;

export const isProfilesLoading = createSelector(
  getProfiles,
  (profile) => profile.loading,
);

export const getProfilesError = createSelector(
  getProfiles,
  (profile) => profile.error,
);

export const getProfilesItems = createSelector(
  getProfiles,
  (profile) => profile.items,
);

export const getProfilesItem = createSelector(
  getProfiles,
  (profile) => profile.item,
);

export const getNextPage = createSelector(
  getProfiles,
  (profile) => profile.nextPage,
);
