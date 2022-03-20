import decksReducer from "./deckSlice";
import { configureStore } from "@reduxjs/toolkit";
import learnSlice from "./learnSlice";

export const store = configureStore({
  reducer: { decks: decksReducer, learn: learnSlice },
});
