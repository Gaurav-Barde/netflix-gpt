import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie, MovieVideo } from "../../../types/types";

interface MoviesState {
  loading: boolean;
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  movieVideos: MovieVideo[];
  error: string | null;
}

const initialState: MoviesState = {
  loading: false,
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
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
    fetchMovieVideos: (state) => {
      state.loading = true;
    },
    fetchMovieVideosSuccess: (state, action: PayloadAction<MovieVideo[]>) => {
      state.movieVideos = action.payload;
      state.loading = false;
    },
    fetchPopularMovies: (state) => {
      state.loading = true;
    },
    fetchPopularMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
      state.loading = false;
    },
    fetchTopRatedMovies: (state) => {
      state.loading = true;
    },
    fetchTopRatedMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.topRatedMovies = action.payload;
      state.loading = false;
    },
    fetchUpcomingMovies: (state) => {
      state.loading = true;
    },
    fetchUpcomingMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.upcomingMovies = action.payload;
      state.loading = false;
    },
    fetchFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchNowPlayingMovies,
  fetchNowPlayingMoviesSuccess,
  fetchMovieVideos,
  fetchMovieVideosSuccess,
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchTopRatedMovies,
  fetchTopRatedMoviesSuccess,
  fetchUpcomingMovies,
  fetchUpcomingMoviesSuccess,
  fetchFailure,
} = moviesSlice.actions;
export default moviesSlice.reducer;
