import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  infoArr: [],
};
const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    getInfo: (id) => {
      return id;
    },
    setInfo: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { getInfo, setInfo } = infoSlice.actions;
export default infoSlice.reducer;
