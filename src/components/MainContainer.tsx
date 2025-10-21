import { useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";

const MainContainer = () => {
  const movies = useSelector(
    (state: RootState) => state.movies.movieList?.nowPlayingMovies
  );

  const mainMovie = movies[0];
  console.log(mainMovie);

  return <div>MainContainer</div>;
};

export default MainContainer;
