import {Genre, Movie} from '../entities';
import {MovieDetail} from '../entities/movieDetail';
import {MovieApiService} from '../useCases';
import Request from '../utils/request';

class MovieService implements MovieApiService {
  request: Request;

  constructor() {
    this.request = new Request();
  }

  async getMovieGenres(): Promise<Genre[]> {
    const response = await this.request.get('genre/movie/list');
    const result = response.data.genres;
    const genres = result.map((genre: any) => Genre.fromJson(genre));
    return genres;
  }

  async getNowPlayingMovies(): Promise<Movie[]> {
    const response = await this.request.get('movie/now_playing');
    const result = response.data.results;
    const movies = result.map((movie: any) => Movie.fromJson(movie));
    return movies;
  }

  async getPopularMovies(): Promise<Movie[]> {
    const response = await this.request.get('movie/popular');
    const result = response.data.results;
    const movies = result.map((movie: any) => Movie.fromJson(movie));
    return movies;
  }

  async getUpcomingMovies(): Promise<Movie[]> {
    const response = await this.request.get('movie/upcoming');
    const result = response.data.results;
    const movies = result.map((movie: any) => Movie.fromJson(movie));
    return movies;
  }

  async getMovieDetail(movieId: number): Promise<MovieDetail> {
    const response = await this.request.get(`movie/${movieId}`);
    const result = response.data;
    const movieDetail = MovieDetail.fromJson(result);
    return movieDetail;
  }
}

export {MovieService};
