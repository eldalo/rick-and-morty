/* eslint-disable no-useless-catch */
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { all, call } from 'redux-saga/effects';
import { spawn } from 'redux-saga-test-plan/matchers';

import navWatch from 'modules/nav/sagas';
import rickAndMortyWatch from 'modules/rick-morty/sagas';

function* rootSaga() {
  try {
    yield all([
      spawn(navWatch),
      call(routinePromiseWatcherSaga),
      call(rickAndMortyWatch),
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
