import { useState } from "react";
import { LOGO_URL, USER_AVATAR_URL } from "../utils/constants";
import UserOptionsDropdown from "./UserOptionsDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [isUserOptionsVisible, setIsUserOptionsVisible] = useState(false);

  const userIconClickHandler = () => {
    setIsUserOptionsVisible((prev) => !prev);
  };

  return (
    <div className="relative  w-screen bg-gradient-to-b from-gray-800 px-8 py-2 z-10 flex items-center justify-between">
      <img src={LOGO_URL} alt="logo" className="w-40" />
      <button
        onClick={userIconClickHandler}
        className="flex items-center cursor-pointer"
      >
        <img src={USER_AVATAR_URL} alt="avatar" className="w-10 h-10" />
        <RiArrowDropDownLine className="font-bold text-4xl text-white" />
      </button>
      {isUserOptionsVisible && <UserOptionsDropdown />}
    </div>
  );
};

export default Header;
