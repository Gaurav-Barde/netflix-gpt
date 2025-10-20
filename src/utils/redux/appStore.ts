import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export default appStore;
