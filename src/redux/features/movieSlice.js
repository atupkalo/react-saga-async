import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    id: [],
    movie: {},
    loding: false,
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.movieList = Object.values(action.payload);
      for (let i = 0; i < state.movieList.length; i++) {
        state.id = state.id.concat(state.movieList[i].id);
      }
    },
  },
});

export const { getMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
