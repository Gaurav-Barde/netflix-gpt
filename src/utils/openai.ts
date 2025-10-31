import OpenAI from "openai";
import { OPENAI_GPT_API_KEY } from "./constants";

export const openAI = new OpenAI({
  apiKey: OPENAI_GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});
