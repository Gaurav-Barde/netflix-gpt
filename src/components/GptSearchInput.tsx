import { useRef, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import lang, { type LanguageCode } from "../utils/langConstants";
import { fetchGptMoviesRequest } from "../utils/redux/slices/gptSlice";

const GptSearchInput = () => {
  const gptSearchRef = useRef<HTMLInputElement>(null);
  const selectedLanguage: LanguageCode = useSelector(
    (state: RootState) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchGptMoviesRequest(gptSearchRef.current?.value ?? ""));
  };

  return (
    <div className="flex justify-center">
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
          className="text-white bg-gray-500 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer"
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchInput;
