import { put, call, all, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { listProfiles, getProfile } from './actions';

const API_HOST = 'https://rickandmortyapi.com/api/character/';

export function* listProfilesSaga() {
  try {
    yield put(listProfiles.request());
    const { data } = yield call(api, { url: API_HOST });
    yield put(
      listProfiles.success({ data: data.results, next: data.info.next }),
    );
  } catch (error) {
    yield put(listProfiles.failure(error));
  } finally {
    yield put(listProfiles.fulfill());
  }
}

export function* getProfileSaga({ payload: { id } }) {
  try {
    yield put(getProfile.request());
    const { data } = yield call(api, { url: `${API_HOST}${id}` });
    yield put(getProfile.success(data));
  } catch (error) {
    yield put(getProfile.failure(error));
  } finally {
    yield put(getProfile.fulfill());
  }
}

export default function* rickAndMortyWatch() {
  yield all([
    takeLatest(listProfiles.TRIGGER, listProfilesSaga),
    takeLatest(getProfile.TRIGGER, getProfileSaga),
  ]);
}
