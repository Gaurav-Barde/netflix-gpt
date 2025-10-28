import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/redux/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);

  return (
    <div className="relative bg-gray-900 py-4 px-8">
      <div className="-mt-44">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
