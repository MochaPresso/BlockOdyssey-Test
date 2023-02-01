import { configureStore } from "@reduxjs/toolkit";
import searchEventSlice from "../features/searchEventSlice";
import paginationEventSlice from "../features/paginationEventSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    searchEvent: searchEventSlice,
    paginationEvent: paginationEventSlice,
  },
  middleware: [logger],
});

export default store;
