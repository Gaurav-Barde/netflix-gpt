import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  title: string | string;
}

interface MoviesState {
  loading: boolean;
  movieList: {
    nowPlayingMovies: Movie[];
  };
  error: string | null;
}

const initialState: MoviesState = {
  loading: false,
  movieList: {
    nowPlayingMovies: [],
  },
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchNowPlayingMovies: (state) => {
      state.loading = true;
    },
    fetchNowPlayingMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.loading = false;
      state.movieList.nowPlayingMovies = action.payload;
    },
    fetchNowPlayingMoviesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchNowPlayingMovies,
  fetchNowPlayingMoviesSuccess,
  fetchNowPlayingMoviesFailure,
} = moviesSlice.actions;
export default moviesSlice.reducer;
