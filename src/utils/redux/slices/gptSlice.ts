import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../../types/types";

interface GptState {
  showGptSearch: boolean;
  loading: boolean;
  gptSuggestions: string[];
  movieResults: Movie[][];
  error: null | string;
}

const initialState: GptState = {
  showGptSearch: false,
  loading: false,
  gptSuggestions: [""],
  movieResults: [],
  error: null,
};

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: initialState,
  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    fetchGptMoviesRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    fetchGptMoviesSuccess: (
      state,
      action: PayloadAction<{
        gptSuggestions: string[];
        movieResults: Movie[][];
      }>
    ) => {
      state.gptSuggestions = action.payload.gptSuggestions;
      state.movieResults = action.payload.movieResults;
      state.loading = false;
    },
    fetchGptMoviesFailure: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  toggleShowGptSearch,
  fetchGptMoviesRequest,
  fetchGptMoviesSuccess,
  fetchGptMoviesFailure,
} = gptSlice.actions;

export default gptSlice.reducer;
