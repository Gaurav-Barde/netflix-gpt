import { API_OPTIONS, MOVIE_DETAILS_URL } from "../utils/constants";

export const fetchMovieDetails = async (movieName: string) => {
  const response = await fetch(MOVIE_DETAILS_URL(movieName), API_OPTIONS);
  const data = await response.json();
  return data.results;
};
