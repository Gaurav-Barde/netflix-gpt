import { useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import MovieList from "./MovieList";

const GptMovies = () => {
  const gpt = useSelector((state: RootState) => state.gpt);

  if (gpt.loading) {
    return (
      <p className="w-screen h-screen flex justify-center items-center text-6xl">
        Loading...
      </p>
    );
  }
  return gpt.gptSuggestions.length && gpt.movieResults.length ? (
    <div className="px-8 w-1/2 mx-auto">
      {gpt.gptSuggestions.map((suggestion, index) => (
        <MovieList title={suggestion} movies={gpt.movieResults[index]} />
      ))}
    </div>
  ) : null;
};

export default GptMovies;
