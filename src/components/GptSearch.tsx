import GptMovies from "./GptMovies";
import GptSearchInput from "./GptSearchInput";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-gray-700">
      <GptSearchInput />
      <GptMovies />
    </div>
  );
};

export default GptSearch;
