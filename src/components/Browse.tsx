import { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { fetchNowPlayingMovies } from "../utils/redux/slices/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
          - Video Title
          - Video Desc
          - Video Background
        Secondary Container
          - MovieList * n
            - VideoCards * n
      
      */}
    </div>
  );
};

export default Browse;
