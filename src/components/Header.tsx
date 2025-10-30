import { LOGO_URL, USER_AVATAR_URL } from "../utils/constants";
import UserOptionsDropdown from "./UserOptionsDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const {
    isUserOptionsVisible,
    user,
    showGptSearch,
    userIconClickHandler,
    gptSearchToggler,
    languageOptionChangeHandler,
  } = useHeader();

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-800 px-8 py-2 z-10 flex items-center justify-between">
      <img src={LOGO_URL} alt="logo" className="w-40" />
      {user && (
        <div className="flex gap-20">
          {showGptSearch && (
            <select
              onChange={languageOptionChangeHandler}
              className="bg-white px-4 py-2 rounded-lg outline-none"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={gptSearchToggler}
            className="bg-green-700 px-4 py-2 rounded-lg text-sm text-gray-200 font-bold cursor-pointer"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <button
            onClick={userIconClickHandler}
            className="flex items-center cursor-pointer"
          >
            <img
              src={user?.photoURL ? user?.photoURL : USER_AVATAR_URL}
              alt="avatar"
              className="w-10 h-10"
            />
            <RiArrowDropDownLine className="font-bold text-4xl text-white" />
          </button>
        </div>
      )}
      {isUserOptionsVisible && <UserOptionsDropdown />}
    </div>
  );
};

export default Header;
