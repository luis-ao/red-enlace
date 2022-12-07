import { configureStore } from "@reduxjs/toolkit";
import siniestroReducer from "./slices/siniestroSlice";
import gmReducer from "./slices/gmSlice";

export const store = configureStore({
  reducer: {
    siniestro: siniestroReducer,
    gm: gmReducer,
  },
});
