import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchCondition: "all",
  searchKeyword: "",
};

export const storeCurrentStateSlice = createSlice({
  name: "storeCurrentState",
  initialState,
  reducers: {
    modifySearchEvent: (state, action) => {
      state.searchCondition = action.payload.condition;
      state.searchKeyword = action.payload.keyword;
    },
  },
});

export const { modifySearchEvent } = storeCurrentStateSlice.actions;

export default storeCurrentStateSlice.reducer;
