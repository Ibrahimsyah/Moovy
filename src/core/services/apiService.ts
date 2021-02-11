import {BASE_IMAGE_URL} from '../../configs/network';
import {Movie} from '../entities';
import {MovieApiService} from '../useCases';
import Request from '../utils/request';

class MovieService implements MovieApiService {
  request: Request;

  constructor() {
    this.request = new Request();
  }

  async getNowPlayingMovies(): Promise<Movie[]> {
    const response = await this.request.get('movie/now_playing');
    const result = response.data.results;
    const movies = result.map((movie: any) => {
      const poster = `${BASE_IMAGE_URL}/w300/${movie.poster_path}`;
      return new Movie(
        movie.id,
        movie.original_title,
        movie.vote_average,
        movie.overview,
        poster,
      );
    });

    return movies;
  }

  async getPopularMovies(): Promise<Movie[]> {
    const response = await this.request.get('movie/popular');
    const result = response.data.results;
    const movies = result.map((movie: any) => {
      const poster = `${BASE_IMAGE_URL}/w300/${movie.poster_path}`;
      return new Movie(
        movie.id,
        movie.original_title,
        movie.vote_average,
        movie.overview,
        poster,
      );
    });

    return movies;
  }
}

export {MovieService};
