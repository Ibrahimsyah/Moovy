import {Genre} from '../../../entities';
import StateTypes from '../reducers/stateTypes';

export const UPDATE_GENRE_DATA = 'UPDATE_GENRE_DATA';

export interface GenreActionType {
  type: string;
  genre: StateTypes['genre'];
}

export const updateGenreData = (genre: Genre[]): GenreActionType => {
  return {
    type: UPDATE_GENRE_DATA,
    genre: genre,
  };
};
