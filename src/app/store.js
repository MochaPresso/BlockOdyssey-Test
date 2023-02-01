import { configureStore } from "@reduxjs/toolkit";
import storeCurrentStateSlice from "../features/storeCurrentStateSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    currentState: storeCurrentStateSlice,
  },
  middleware: [logger],
});

export default store;
