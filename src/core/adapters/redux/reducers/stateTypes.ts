import {Movie} from '../../../entities';

export default interface StateTypes {
  movies: {
    nowPlaying: Movie[];
    popular: Movie[];
    top: Movie[];
    upcoming: Movie[];
  };
}
