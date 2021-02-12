import {BASE_IMAGE_URL} from '../../configs/network';

class Movie {
  id: number;
  title: string;
  rating: number;
  overview: string;
  poster: string;
  vote: number;

  static fromJson(json: any): Movie {
    const poster = `${BASE_IMAGE_URL}w300${json.poster_path}`;
    return new Movie(
      json.id,
      json.original_title,
      json.vote_average,
      json.overview,
      poster,
      json.vote_count,
    );
  }
  constructor(
    id: number,
    title: string,
    rating: number,
    overview: string,
    poster: string,
    vote: number,
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.overview = overview;
    this.poster = poster;
    this.vote = vote;
  }
}

export {Movie};
