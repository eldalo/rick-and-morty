import { put, call, all, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { listProfiles, viewProfile } from './actions';

const { API_HOST } = process.env;

export function* listProfilesSaga() {
  try {
    yield put(listProfiles.request());
    const response = yield call(api, { url: API_HOST });
    // eslint-disable-next-line no-console
    console.log('response: ', response);
  } catch (error) {
    yield put(listProfiles.failure(error));
  } finally {
    yield put(listProfiles.fulfill());
  }
}

export function* viewProfileSaga() {
  try {
    yield put(viewProfile.request());
  } catch (error) {
    yield put(viewProfile.failure(error));
  } finally {
    yield put(viewProfile.fulfill());
  }
}

export default function* rickAndMortyWatch() {
  yield all([
    takeLatest(listProfiles.TRIGGER, listProfilesSaga),
    takeLatest(viewProfile.TRIGGER, viewProfileSaga),
  ]);
}
