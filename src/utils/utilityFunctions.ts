import { openAI } from "./openai";

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
  const fullNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;

  if (fullName && !fullNameRegex.test(fullName))
    return "Please enter a valid full name";
  if (!emailRegEx) return "Please enter a valid email address.";
  if (!passwordRegex) return "Please enter a valid password.";

  return null;
};

// function for making api call to GPT API's with the user input
export async function getMovieSuggestions(userInput: string) {
  const prompt = `
  You are a movie recommendation assistant.

  User request: "${userInput}"

  Generate a list of 5 movies that best match this description.

  Format the response as comma separated string like the example ahead: "Sholay, Mughal-e-Azam, Pakeezah, Guide, Awaara".
  `;

  const response = await openAI.chat.completions.create({
    model: "gpt-5-nano",
    messages: [{ role: "user", content: prompt }],
  });

  const content = response.choices[0].message?.content;

  if (!content) {
    throw new Error("Something went wrong while calling OpenAI");
  }

  return content;
}
