import {takeLatest, all, put, call} from 'redux-saga/effects';
import {MovieService} from '../../../services/apiService';
import {MovieInteractor} from '../../../useCases';
import {
  LoadingActionType,
  updateInitialDataLoading,
  updateNowPlayingMovies,
  updatePopularMovies,
  updateUpcomingMovie,
} from '../actions';

const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export const getInitialDataAction = (): LoadingActionType => ({
  type: GET_INITIAL_DATA,
  loading: {
    initialData: true,
  },
});

function* getNowPlayingMoviesSaga() {
  try {
    const service = new MovieService();
    const interactor = new MovieInteractor(service);

    const movies = yield interactor.getNowPlayingMovies();
    yield put(updateNowPlayingMovies(movies));
  } catch (error) {
    console.error(error);
  }
}

function* getPopularMoviesSaga() {
  try {
    const service = new MovieService();
    const interactor = new MovieInteractor(service);

    const movies = yield interactor.getPopularMovies();
    yield put(updatePopularMovies(movies));
  } catch (error) {
    console.error(error);
  }
}

function* getUpcomingMoviesSaga() {
  try {
    const service = new MovieService();
    const interactor = new MovieInteractor(service);

    const movies = yield interactor.getUpcomingMovies();
    yield put(updateUpcomingMovie(movies));
  } catch (error) {
    console.error(error);
  }
}

function* getInitialDataSaga() {
  yield all([
    call(getNowPlayingMoviesSaga),
    call(getPopularMoviesSaga),
    call(getUpcomingMoviesSaga),
  ]);
  yield put(updateInitialDataLoading(false));
}

export default function* rootSaga() {
  yield all([takeLatest(GET_INITIAL_DATA, getInitialDataSaga)]);
}
