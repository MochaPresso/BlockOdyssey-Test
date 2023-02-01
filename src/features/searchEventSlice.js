import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchCondition: "all",
  searchKeyword: "",
};

export const searchEventSlice = createSlice({
  name: "searchEvent",
  initialState,
  reducers: {
    modifySearchEvent: (state, action) => {
      state.searchCondition = action.payload.condition;
      state.searchKeyword = action.payload.keyword;
    },
  },
});

export const { modifySearchEvent } = searchEventSlice.actions;

export default searchEventSlice.reducer;
