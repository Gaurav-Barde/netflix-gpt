import { OPENAI_GPT_PROMPT } from "../utils/constants";
import { openAI } from "../utils/openai";

export const fetchGptSuggestions = async (userInput: string) => {
  const gptPrompt = OPENAI_GPT_PROMPT(userInput);
  const response = await openAI.chat.completions.create({
    model: "gpt-5-nano",
    messages: [{ role: "user", content: gptPrompt }],
  });
  const content = response.choices[0].message.content;

  if (!content) {
    throw new Error("Something went wrong while getting suggestions from GPT");
  }

  return content
    .split(",")
    .map((movie) => movie.trim())
    .filter(Boolean);
};
