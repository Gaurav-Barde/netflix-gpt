import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie, MovieVideo } from "../../../types/types";

interface MoviesState {
  loading: boolean;
  nowPlayingMovies: Movie[];
  movieVideos: MovieVideo[];
  error: string | null;
}

const initialState: MoviesState = {
  loading: false,
  nowPlayingMovies: [],
  movieVideos: [],
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
      state.nowPlayingMovies = action.payload;
      state.loading = false;
    },
    fetchNowPlayingMoviesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchMovieVideos: (state) => {
      state.loading = true;
    },
    fetchMovieVideosSuccess: (state, action: PayloadAction<MovieVideo[]>) => {
      state.movieVideos = action.payload;
      state.loading = false;
    },
    fetchMovieVideosFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchNowPlayingMovies,
  fetchNowPlayingMoviesSuccess,
  fetchNowPlayingMoviesFailure,
  fetchMovieVideos,
  fetchMovieVideosSuccess,
  fetchMovieVideosFailure,
} = moviesSlice.actions;
export default moviesSlice.reducer;
