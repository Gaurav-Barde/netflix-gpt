import { useEffect, useState } from "react";
import { toggleShowGptSearch } from "../utils/redux/slices/gptSlice";
import { setLanguage } from "../utils/redux/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/redux/appStore";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/redux/slices/userSlice";
import { auth } from "../utils/firebaseConfig";

const useHeader = () => {
  const [isUserOptionsVisible, setIsUserOptionsVisible] = useState(false);
  const user = useSelector(
    (state: { user: { photoURL?: string } }) => state.user
  );
  const showGptSearch = useSelector(
    (state: RootState) => state.gpt.showGptSearch
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

  const gptSearchToggler = () => dispatch(toggleShowGptSearch());

  const languageOptionChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setLanguage(e.target.value));
  };

  return {
    isUserOptionsVisible,
    user,
    showGptSearch,
    userIconClickHandler,
    gptSearchToggler,
    languageOptionChangeHandler,
  };
};

export default useHeader;
