class Genre {
  id: number;
  genre: string;

  constructor(id: number, genre: string) {
    this.id = id;
    this.genre = genre;
  }
  static fromJson(json: any): Genre {
    return new Genre(json.id, json.name);
  }
}

export {Genre};
