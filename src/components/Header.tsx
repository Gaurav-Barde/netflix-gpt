import { useState, useEffect } from "react";
import { LOGO_URL, USER_AVATAR_URL } from "../utils/constants";
import UserOptionsDropdown from "./UserOptionsDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { addUser, removeUser } from "../utils/redux/slices/userSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const [isUserOptionsVisible, setIsUserOptionsVisible] = useState(false);
  const user = useSelector(
    (state: { user: { photoURL?: string } }) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const userIconClickHandler = () => {
    setIsUserOptionsVisible((prev) => !prev);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-800 px-8 py-2 z-10 flex items-center justify-between">
      <img src={LOGO_URL} alt="logo" className="w-40" />
      {user && (
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
      )}
      {isUserOptionsVisible && <UserOptionsDropdown />}
    </div>
  );
};

export default Header;
