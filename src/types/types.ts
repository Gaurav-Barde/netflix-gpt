export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
}

export interface MovieVideo {
  id: string;
  key: string;
  type: string;
}
