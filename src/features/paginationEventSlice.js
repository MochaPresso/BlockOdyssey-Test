import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageLimit: 10,
  currentPage: 1,
  numberOfProduct: 0,
};

export const paginationEventSlice = createSlice({
  name: "paginationEvent",
  initialState,
  reducers: {
    modifyPageLimit: (state, action) => {
      state.pageLimit = action.payload;
    },
    switchCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    storeNumberOfProduct: (state, action) => {
      state.numberOfProduct = action.payload;
    },
  },
});

export const { modifyPageLimit, switchCurrentPage, storeNumberOfProduct } =
  paginationEventSlice.actions;

export default paginationEventSlice.reducer;
