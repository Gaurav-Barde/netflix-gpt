import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import rootSaga from "./sagas/movieSaga";

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;
