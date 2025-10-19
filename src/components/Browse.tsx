import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API_URL } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <h1 className="text-4xl font-bold mt-10 text-center">Browse Page</h1>
    </div>
  );
};

export default Browse;
