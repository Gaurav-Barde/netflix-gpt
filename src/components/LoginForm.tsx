import { useRef, useState } from "react";
import TextInput from "./TextInput";
import { validateFormInput } from "../utils/utilityFunctions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

interface LoginFormProps {
  isSignInForm: boolean;
}

const LoginForm = ({ isSignInForm }: LoginFormProps) => {
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const submitButtonHandler = () => {
    const message = validateFormInput(
      emailRef.current?.value ?? null,
      passwordRef.current?.value ?? null,
      nameRef.current?.value ?? null
    );
    setFormErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up user logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current?.value ?? "",
        passwordRef.current?.value ?? ""
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
      {!isSignInForm && <TextInput placeholder="Full Name" ref={nameRef} />}
      <TextInput placeholder="Email" ref={emailRef} />
      <TextInput placeholder="Password" type="password" ref={passwordRef} />
      {formErrorMessage && (
        <p className="text-red-700 font-semibold mb-4">{formErrorMessage}</p>
      )}
      <button
        type="submit"
        onClick={submitButtonHandler}
        className="text-white bg-red-600 font-medium py-2 rounded-md"
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default LoginForm;
