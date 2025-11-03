import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchGptSuggestions } from "../../../api/gptApi";
import { fetchMovieDetails } from "../../../api/tmdbApi";
import {
  fetchGptMoviesRequest,
  fetchGptMoviesSuccess,
  fetchGptMoviesFailure,
} from "../slices/gptSlice";
import type { Movie } from "../../../types/types";

function* fetchGptMoviesSaga(action: ReturnType<typeof fetchGptMoviesRequest>) {
  try {
    const gptSuggestions: string[] = yield call(
      fetchGptSuggestions,
      action.payload
    );
    const movieResults: Movie[][] = yield all(
      gptSuggestions.map((movie: string) => call(fetchMovieDetails, movie))
    );
    yield put(fetchGptMoviesSuccess({ gptSuggestions, movieResults }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchGptMoviesFailure(error?.message));
    }
  }
}

export function* watcherGptSaga() {
  yield takeLatest(fetchGptMoviesRequest.type, fetchGptMoviesSaga);
}
