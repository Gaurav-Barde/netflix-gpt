import { useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import lang, { type LanguageCode } from "../utils/langConstants";
import { useRef, type FormEvent } from "react";
import { getMovieSuggestions } from "../utils/utilityFunctions";
import { API_OPTIONS, MOVIE_DETAILS_URL } from "../utils/constants";

const GptSearchInput = () => {
  const gptSearchRef = useRef<HTMLInputElement>(null);
  const selectedLanguage: LanguageCode = useSelector(
    (state: RootState) => state.language.selectedLanguage
  );

  const getMovieDetails = async (movie: string) => {
    const data = await fetch(MOVIE_DETAILS_URL(movie), API_OPTIONS);
    const json = await data.json();
    return json?.results;
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gptResult = await getMovieSuggestions(
      gptSearchRef.current?.value || ""
    );
    const gptResultArr = gptResult?.split(", ");
    const movieDetailsResult = gptResultArr?.map(
      async (movie: string) => await getMovieDetails(movie)
    );
    console.log(movieDetailsResult);
  };

  return (
    <div className="flex justify-center h-screen bg-gray-700">
      <form className="w-1/2 px-4 py-8" onSubmit={submitHandler}>
        <input
          type="text"
          name="gpt-search"
          ref={gptSearchRef}
          placeholder={lang[selectedLanguage].gptInputPlaceholder}
          className="text-white border border-green-100 outline-none rounded-full px-4 py-2 w-10/12 mr-2"
        />
        <button
          type="submit"
          className="text-white bg-gray-500 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchInput;
