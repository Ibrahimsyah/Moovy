import {
  UPDATE_NOW_PLAYING,
  UPDATE_POPULAR,
  UPDATE_TOP,
  UPDATE_UPCOMING,
  UpdateMovieActionType,
} from '../actions';
import StateTypes from './stateTypes';

type MovieStateType = StateTypes['movies'];
const initState: StateTypes['movies'] = {
  nowPlaying: [],
  popular: [],
  top: [],
  upcoming: [],
};

export default (
  state: MovieStateType = initState,
  action: UpdateMovieActionType,
): MovieStateType => {
  const {movies, type} = action;
  switch (type) {
    case UPDATE_NOW_PLAYING: {
      return {
        ...state,
        nowPlaying: movies,
      };
    }
    case UPDATE_POPULAR: {
      return {
        ...state,
        popular: movies,
      };
    }
    case UPDATE_TOP: {
      return {
        ...state,
        top: movies,
      };
    }
    case UPDATE_UPCOMING: {
      return {
        ...state,
        upcoming: movies,
      };
    }
    default:
      return state;
  }
};
