import TextInput from "./TextInput";

interface LoginFormProps {
  isSignInForm: boolean;
}

const LoginForm = ({ isSignInForm }: LoginFormProps) => {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => formSubmitHandler(e)}>
      {!isSignInForm && <TextInput placeholder="Full Name" />}
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" type="password" />
      <button
        type="submit"
        className="text-white bg-red-600 font-medium py-2 rounded-md"
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default LoginForm;
