class Movie {
  id: Number;
  title: String;
  rating: Number;
  overview: String;
  poster_path: String;

  constructor(
    id: Number,
    title: String,
    rating: Number,
    overview: String,
    poster_path: String,
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.overview = overview;
    this.poster_path = poster_path;
  }
}

export {Movie};
