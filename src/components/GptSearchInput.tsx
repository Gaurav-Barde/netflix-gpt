import { useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import lang, { type LanguageCode } from "../utils/langConstants";

const GptSearchInput = () => {
  const selectedLanguage: LanguageCode = useSelector(
    (state: RootState) => state.language.selectedLanguage
  );

  return (
    <div className="flex justify-center h-screen bg-gray-700">
      <form className="w-1/2 px-4 py-8">
        <input
          type="text"
          name="gpt-search"
          placeholder={lang[selectedLanguage].gptInputPlaceholder}
          className="text-white border border-green-100 outline-none rounded-full px-4 py-2 w-10/12 mr-2"
        />
        <button className="text-white bg-gray-500 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchInput;
