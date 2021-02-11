class Movie {
  id: number;
  title: string;
  rating: number;
  overview: string;
  poster: string;

  constructor(
    id: number,
    title: string,
    rating: number,
    overview: string,
    poster: string,
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.overview = overview;
    this.poster = poster;
  }
}

export {Movie};
