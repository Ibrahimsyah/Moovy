import {BASE_IMAGE_URL} from '../../configs/network';

class MovieDetail {
  title: string;
  overview: string;
  genres: string[];
  releaseDate: Date;
  runtime: number;
  status: string;
  tagline: string;
  vote: number;
  voteCount: number;
  popularity: number;
  poster: string;
  homepage: string;

  constructor(
    title: string,
    overview: string,
    genres: string[],
    releaseDate: Date,
    runtime: number,
    status: string,
    tagline: string,
    vote: number,
    voteCount: number,
    popularity: number,
    poster: string,
    homepage: string,
  ) {
    this.title = title;
    this.overview = overview;
    this.genres = genres;
    this.releaseDate = releaseDate;
    this.runtime = runtime;
    this.status = status;
    this.tagline = tagline;
    this.vote = vote;
    this.voteCount = voteCount;
    this.popularity = popularity;
    this.poster = poster;
    this.homepage = homepage;
  }

  static fromJson(json: any): MovieDetail {
    const movieGenres: string[] = json.genres.map((genre: any) => genre.name);
    const movieReleaseDate: Date = new Date(json.release_date);
    const moviePoster = `${BASE_IMAGE_URL}w500${json.poster_path}`;
    return new MovieDetail(
      json.title,
      json.overview,
      movieGenres,
      movieReleaseDate,
      json.runtime,
      json.status,
      json.tagline,
      json.vote_average,
      json.vote_count,
      json.popularity,
      moviePoster,
      json.homepage,
    );
  }
}

export {MovieDetail};
