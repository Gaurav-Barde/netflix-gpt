import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const UserOptionsDropdown = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);

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
    <div className="absolute z-100 right-10 h- top-full bg-gradient-to-b from-red-200 to-red-300 px-8 py-4 rounded-lg">
      <span className="text-md block mb-2">{`Hi, ${user?.displayName}!`}</span>
      <button
        onClick={signOutButtonHandler}
        className="text-md font-semibold cursor-pointer text-gray-600"
      >
        Signout
      </button>
    </div>
  );
};

export default UserOptionsDropdown;
