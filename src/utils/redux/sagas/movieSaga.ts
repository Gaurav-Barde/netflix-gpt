import { call, put, takeLatest, all } from "redux-saga/effects";
import { API_OPTIONS, NOW_PLAYING_API_URL } from "../../constants";
import {
  fetchNowPlayingMovies,
  fetchNowPlayingMoviesSuccess,
  fetchNowPlayingMoviesFailure,
} from "../slices/moviesSlice";

const fetchNowPlayingMoviesApi = async () => {
  const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS);
  const json = await data.json();
  return json.results;
};

function* fetchNowPlayingMoviesSaga(): Generator<any, void, any> {
  try {
    const response = yield call(fetchNowPlayingMoviesApi);
    yield put(fetchNowPlayingMoviesSuccess(response));
  } catch (error: unknown) {
    yield put(
      fetchNowPlayingMoviesFailure(
        error instanceof Error ? error.message : "Unknown error"
      )
    );
  }
}

function* watchFetchNowPlayingMovies() {
  yield takeLatest(fetchNowPlayingMovies.type, fetchNowPlayingMoviesSaga);
}

export default function* rootSaga() {
  yield all([watchFetchNowPlayingMovies()]);
}
