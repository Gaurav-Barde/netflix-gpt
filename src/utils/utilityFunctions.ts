export const validateFormInput = (
  email: string | null,
  password: string | null,
  fullName?: string | null
) => {
  const emailRegEx = /^\S+@\S+\.\S+$/.test(email ?? "");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password ?? ""
    );
  const fullNameRegex =
    fullName && /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(fullName ?? "");

  if (!fullNameRegex) return "Please enter a valid full name";
  if (!emailRegEx) return "Please enter a valid email address.";
  if (!passwordRegex) return "Please enter a valid password.";

  return null;
};
