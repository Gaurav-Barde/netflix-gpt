import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  API_OPTIONS,
  MOVIE_VIDEOS_URL,
  NOW_PLAYING_API_URL,
} from "../../constants";
import {
  fetchNowPlayingMovies,
  fetchNowPlayingMoviesSuccess,
  fetchNowPlayingMoviesFailure,
  fetchMovieVideosSuccess,
  fetchMovieVideosFailure,
} from "../slices/moviesSlice";

const fetchNowPlayingMoviesApi = async () => {
  const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS);
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
    const nowPlayingMovies = yield call(fetchNowPlayingMoviesApi);
    yield put(fetchNowPlayingMoviesSuccess(nowPlayingMovies));
    const movieId = nowPlayingMovies[0]?.id ?? 0;
    const movieVideos = yield call(fetchMovieVideos, movieId);
    yield put(fetchMovieVideosSuccess(movieVideos));
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    yield put(fetchNowPlayingMoviesFailure(errorMessage));
    yield put(fetchMovieVideosFailure(errorMessage));
  }
}

function* watchFetchNowPlayingMovies() {
  yield takeLatest(fetchNowPlayingMovies.type, fetchNowPlayingMoviesSaga);
}

export default function* rootSaga() {
  yield all([watchFetchNowPlayingMovies()]);
}
