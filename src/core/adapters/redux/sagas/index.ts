import {all} from 'redux-saga/effects';
import MovieSaga from './movieSaga';

export * from './movieSaga';

export default function* rootSaga() {
  yield all([MovieSaga()]);
}
