import { useState } from "react";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE_URL} alt="background-image" />
      </div>
      <div className="h-screen relative flex justify-center items-center">
        <div className="bg-black/80 p-16 w-5/12 rounded-lg">
          <h1 className="text-white font-bold text-3xl mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <LoginForm isSignInForm={isSignInForm} />
          <p className="text-gray-100 mt-6 font-extralight">
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}
            <button
              onClick={toggleSignInForm}
              className="font-semibold text-white"
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
