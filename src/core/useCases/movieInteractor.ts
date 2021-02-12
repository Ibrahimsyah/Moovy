import {Genre, Movie} from '../entities';
import {MovieDetail} from '../entities/movieDetail';

export interface MovieApiService {
  getNowPlayingMovies: () => Promise<Movie[]>;
  getPopularMovies: () => Promise<Movie[]>;
  getUpcomingMovies: () => Promise<Movie[]>;
  getMovieGenres: () => Promise<Genre[]>;
  getMovieDetail: (movieId: number) => Promise<MovieDetail>;
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

  async getUpcomingMovies(): Promise<Movie[]> {
    return this.movieService.getUpcomingMovies();
  }

  async getMovieGenres(): Promise<Genre[]> {
    return this.movieService.getMovieGenres();
  }

  async getMovieDetail(movieId: number): Promise<MovieDetail> {
    return this.movieService.getMovieDetail(movieId);
  }
}
