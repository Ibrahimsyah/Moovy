import {Movie} from '../../../entities';

export const UPDATE_NOW_PLAYING = 'UPDATE_NOW_PLAYING';
export const UPDATE_POPULAR = 'UPDATE_POPULAR';
export const UPDATE_TOP = 'UPDATE_TOP';
export const UPDATE_UPCOMING = 'UPDATE_UPCOMING';

export interface UpdateMovieActionType {
  type: string;
  movies: Movie[];
}

export const updateNowPlayingMovies = (
  movies: Movie[],
): UpdateMovieActionType => {
  return {
    type: UPDATE_NOW_PLAYING,
    movies: movies,
  };
};

export const updatePopularMovies = (movies: Movie[]): UpdateMovieActionType => {
  return {
    type: UPDATE_POPULAR,
    movies: movies,
  };
};

export const updateTopMovies = (movies: Movie[]): UpdateMovieActionType => {
  return {
    type: UPDATE_TOP,
    movies: movies,
  };
};

export const updateUpcomingMovie = (movies: Movie[]): UpdateMovieActionType => {
  return {
    type: UPDATE_UPCOMING,
    movies: movies,
  };
};
