import { createSlice } from "@reduxjs/toolkit";
import { daysToMiliseconds, milisecondsToDays } from "../util/newInterval";

const learnSlice = createSlice({
  name: "learn",
  initialState: {
    dueCards: [],
    completedCards: [],
    deckId: null,
  },
  reducers: {
    learnACard: (state, action) => {
      const today = new Date();
      const newDueDay = new Date(
        Date.now() + daysToMiliseconds(action.payload.newInterval)
      );
      const miliDiff = newDueDay - today;
      // card is learned
      if (milisecondsToDays(miliDiff) >= 1) {
        state.completedCards.push(action.payload.card);
        state.dueCards = state.dueCards.filter(
          (card) => card.id !== action.payload.card.id
        );
        //put modified card to backend
      }
      // put card back to due cards
      else {
        state.dueCards = state.dueCards.filter(
          (card) => card.id !== action.payload.card.id
        );
        state.dueCards.push(action.payload.card);
      }
    },
    start: (state, action) => {
      state.deckId = action.payload.deckId;
      state.dueCards = action.payload.dueCards;
      state.completedCards = [];
    },
  },
});

export const learnActions = learnSlice.actions;
export default learnSlice.reducer;
