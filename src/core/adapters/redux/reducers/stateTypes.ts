import {Genre, Movie} from '../../../entities';

export default interface StateTypes {
  movies: {
    nowPlaying: Movie[];
    popular: Movie[];
    top: Movie[];
    upcoming: Movie[];
  };
  loading: {
    initialData: boolean;
  };
  genre: Genre[];
}
