import { useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import type { MovieVideo } from "../types/types";

type UseMoviesReturn = {
  title: string;
  overview: string;
  movieTrailer: MovieVideo | null;
};

const useMovies = (): UseMoviesReturn | null => {
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movies.nowPlayingMovies
  );
  const movieVideos = useSelector(
    (state: RootState) => state.movies.movieVideos
  );
  if (!nowPlayingMovies.length || !movieVideos.length) return null;

  const mainMovie = nowPlayingMovies[0];
  const { original_title, overview } = mainMovie;

  const filteredMovies = movieVideos.filter((movie) => movie.type === "Teaser");
  const movieTrailer = filteredMovies.length
    ? filteredMovies[0]
    : movieVideos[0];

  return { title: original_title, overview, movieTrailer };
};

export default useMovies;
