import { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovies } from "../utils/redux/slices/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import type { RootState } from "../utils/redux/appStore";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector(
    (state: RootState) => state.gpt.showGptSearch
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
