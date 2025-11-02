import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";
import languageReducer from "./slices/languageSlice";
import { watchFetchNowPlayingMovies } from "./sagas/moviesSaga";
import { watcherGptSaga } from "./sagas/gptSaga";

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

function* rootSaga() {
  yield all([watchFetchNowPlayingMovies(), watcherGptSaga()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;
