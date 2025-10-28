import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  API_OPTIONS,
  MOVIE_VIDEOS_URL,
  MOVIES_BY_CATEGORY_API_URL,
} from "../../constants";
import {
  fetchNowPlayingMovies,
  fetchNowPlayingMoviesSuccess,
  fetchMovieVideosSuccess,
  fetchFailure,
  fetchPopularMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchUpcomingMoviesSuccess,
} from "../slices/moviesSlice";

const fetchMoviesByCategory = async (category: string) => {
  const data = await fetch(MOVIES_BY_CATEGORY_API_URL(category), API_OPTIONS);
  const json = await data.json();
  return json.results;
};

const fetchMovieVideos = async (id: number) => {
  const data = await fetch(MOVIE_VIDEOS_URL(id), API_OPTIONS);
  const json = await data.json();
  return json.results;
};

function* fetchNowPlayingMoviesSaga(): Generator<any, void, any> {
  try {
    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      yield all([
        call(fetchMoviesByCategory, "now_playing"),
        call(fetchMoviesByCategory, "popular"),
        call(fetchMoviesByCategory, "top_rated"),
        call(fetchMoviesByCategory, "upcoming"),
      ]);
    yield put(fetchNowPlayingMoviesSuccess(nowPlayingMovies));
    yield put(fetchPopularMoviesSuccess(popularMovies));
    yield put(fetchTopRatedMoviesSuccess(topRatedMovies));
    yield put(fetchUpcomingMoviesSuccess(upcomingMovies));

    const movieId = nowPlayingMovies[2]?.id ?? 0;
    const movieVideos = yield call(fetchMovieVideos, movieId);
    yield put(fetchMovieVideosSuccess(movieVideos));
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    yield put(fetchFailure(errorMessage));
  }
}

function* watchFetchNowPlayingMovies() {
  yield takeLatest(fetchNowPlayingMovies.type, fetchNowPlayingMoviesSaga);
}

export default function* rootSaga() {
  yield all([watchFetchNowPlayingMovies()]);
}
