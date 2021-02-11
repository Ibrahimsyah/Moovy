import {takeLatest, all, put} from 'redux-saga/effects';
import {Movie} from '../../../entities';
import {MovieService} from '../../../services/apiService';
import {MovieInteractor} from '../../../useCases';
import {updateNowPlayingMovies, updatePopularMovies} from '../actions';

export const GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIE';
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIE';

interface MovieActionType {
  type: string;
  movies: Movie[];
}

export const getNowPlayingMoviesAction = (): MovieActionType => ({
  type: GET_NOW_PLAYING_MOVIES,
  movies: [],
});

export const getPopularMoviesAction = (): MovieActionType => ({
  type: GET_POPULAR_MOVIES,
  movies: [],
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
export default function* rootSaga() {
  yield all([
    takeLatest(GET_NOW_PLAYING_MOVIES, getNowPlayingMoviesSaga),
    takeLatest(GET_POPULAR_MOVIES, getPopularMoviesSaga),
  ]);
}
