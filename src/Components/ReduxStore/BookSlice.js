import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: {books:[]},
  reducers: {
    addBookData(state, actions) {
      state.books = actions.payload;
    },
  },
});

 export const bookActions = bookSlice.actions;
 export default bookSlice.reducer