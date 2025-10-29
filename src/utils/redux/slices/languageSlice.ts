import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES } from "../../langConstants";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    selectedLanguage: SUPPORTED_LANGUAGES[0].identifier,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
