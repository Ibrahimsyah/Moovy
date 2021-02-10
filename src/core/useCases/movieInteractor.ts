import {Movie} from '../entities';

export interface MovieApiService {
  getNowPlayingMovies: () => Promise<Movie[]>;
}

export class MovieInteractor {
  movieService: MovieApiService;

  constructor(movieService: MovieApiService) {
    this.movieService = movieService;
  }

  async getNowPlayingMovies(): Promise<Movie[]> {
    return this.movieService.getNowPlayingMovies();
  }
}
