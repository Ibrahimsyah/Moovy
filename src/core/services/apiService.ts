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
      return new Movie(
        movie.id,
        movie.original_title,
        movie.vote_average,
        movie.overview,
        movie.poster_path,
      );
    });

    return movies;
  }
}

export {MovieService};
