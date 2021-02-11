import {Genre, Movie} from '../entities';

export interface MovieApiService {
  getNowPlayingMovies: () => Promise<Movie[]>;
  getPopularMovies: () => Promise<Movie[]>;
  getMovieGenres: () => Promise<Genre[]>;
}

export class MovieInteractor {
  movieService: MovieApiService;

  constructor(movieService: MovieApiService) {
    this.movieService = movieService;
  }

  async getNowPlayingMovies(): Promise<Movie[]> {
    return this.movieService.getNowPlayingMovies();
  }

  async getPopularMovies(): Promise<Movie[]> {
    return this.movieService.getPopularMovies();
  }

  async getMovieGenres(): Promise<Genre[]> {
    return this.movieService.getMovieGenres();
  }
}
