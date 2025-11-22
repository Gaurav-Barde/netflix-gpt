import { FIREBASE_CLOUD_URL } from "../utils/constants";

export const fetchGptSuggestions = async (userInput: string) => {
  try {
    const response = await fetch(FIREBASE_CLOUD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: userInput }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();

    return data?.recommendations.split(",").map((item: string) => item.trim());
  } catch (e: unknown) {
    console.log("fetch Suggestions error: ", e);
  }
};
