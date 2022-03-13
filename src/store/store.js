import decksReducer from "./deck-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { decks: decksReducer },
});
