import { configureStore } from "@reduxjs/toolkit";
import CarritoSlices from "./slices/CarritoSlices";

const store = configureStore({
  reducer: {
    cart: CarritoSlices,
  },
});

export default store;
