import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptSearchReducer from "./slices/gptSlice";
import languageReducer from "./slices/languageSlice";
import rootSaga from "./sagas/movieSaga";

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;
