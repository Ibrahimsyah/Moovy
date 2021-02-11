import {GenreActionType, UPDATE_GENRE_DATA} from '../actions/genre';
import StateTypes from './stateTypes';

type GenreStateType = StateTypes['genre'];

const initState: StateTypes['genre'] = [];

export default (
  state: GenreStateType = initState,
  action: GenreActionType,
): GenreStateType => {
  const {type, genre} = action;
  switch (type) {
    case UPDATE_GENRE_DATA: {
      return genre;
    }
    default: {
      return state;
    }
  }
};
