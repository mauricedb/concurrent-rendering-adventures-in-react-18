export interface Account {
  id: number;
  firstname: string;
  surname: string;
  email: string;
  balance: string;
  picture: string;
  address: string;
  phone: string;
  favorite_movie: number;
  transactions?: Transaction[];
}

export interface Transaction {
  amount: string;
  date: string;
  type: string;
  name: string;
}

export interface Movie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
