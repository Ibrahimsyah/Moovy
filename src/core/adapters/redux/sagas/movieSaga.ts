import {takeLatest, all, put} from 'redux-saga/effects';
import {Movie} from '../../../entities';
import {MovieService} from '../../../services/apiService';
import {MovieInteractor} from '../../../useCases';
import {updateNowPlayingMovies} from '../actions';

export const GET_NOW_PLAYING_MOVIE = 'GET_NOW_PLAYING_MOVIE';

interface MovieActionType {
  type: string;
  movies: Movie[];
}

export const getNowPlayingMoviesAction = (
  movies: Movie[],
): MovieActionType => ({
  type: GET_NOW_PLAYING_MOVIE,
  movies: movies,
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

export default function* rootSaga() {
  yield all([takeLatest(GET_NOW_PLAYING_MOVIE, getNowPlayingMoviesSaga)]);
}
