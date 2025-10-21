import { useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (state: RootState) => state.movies.movieList?.nowPlayingMovies
  );
  if (movies.length === 0) return;

  const mainMovie = movies[0];
  const { title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
