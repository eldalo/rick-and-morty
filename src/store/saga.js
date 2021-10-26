/* eslint-disable no-useless-catch */
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { all, call } from 'redux-saga/effects';

import rickAndMortyWatch from 'modules/rick-morty/sagas';

function* rootSaga() {
  try {
    yield all([call(routinePromiseWatcherSaga), call(rickAndMortyWatch)]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
