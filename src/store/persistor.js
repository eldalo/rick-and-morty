/* eslint-disable import/prefer-default-export */
import localForage from 'localforage';

const isDebug = process.env.NODE_ENV !== 'production';

localForage.config({
  name: 'rick-morty',
  storeName: 'rick-morty',
});

export const rootPersistConfig = {
  key: 'root',
  storage: localForage,
  debug: isDebug,
  whitelist: ['rickAndMorty'],
};
