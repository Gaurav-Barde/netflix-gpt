import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router";

const UserOptionsDropdown = () => {
  const navigate = useNavigate();
  const signOutButtonHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="absolute right-10 top-full bg-pink-50 p-4">
      <button
        onClick={signOutButtonHandler}
        className="text-md font-semibold cursor-pointer"
      >
        Signout
      </button>
    </div>
  );
};

export default UserOptionsDropdown;
