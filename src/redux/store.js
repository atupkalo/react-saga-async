import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import MovieReduser from "./features/movieSlice";
import infoReducer from "./features/infoSlice";
import moviesSaga from "./moviesSaga";
import infoSaga from "./infoSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: MovieReduser,
    info: infoReducer,
  },
  middleware: [saga],
});

saga.run(moviesSaga);
saga.run(infoSaga);
export default store;
