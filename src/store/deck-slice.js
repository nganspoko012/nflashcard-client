import { createSlice } from "@reduxjs/toolkit";

let DUMMY_DECKS = [
  {
    id: 1,
    title: "600 Essential Words For TOEIC",
    scope: "private",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 2,
    title: "English Grammar",
    scope: "public",
    author: {
      name: "Athony",
    },
    dueCards: 5,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 3,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 4,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 5,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 6,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
];

const initialState = {
  decks: DUMMY_DECKS,
  newDecks: [],
  newDecksCount: 0,
};

const deckSlice = createSlice({
  name: "decks",
  initialState,
  reducers: {
    addDeck: (state, action) => {
      console.log(action.payload);
      state.decks.push(action.payload);
      state.newDecks.push(action.payload);
      state.newDecksCount++;
    },
    removeDeck: (state, action) => {
      const id = action.payload;
      state.decks = state.decks.filter((deck) => deck.id !== id);
      const newDeckToRemove = state.newDecks.find((deck) => deck.id === id);
      if (newDeckToRemove) state.newDecksCount--;
      state.newDecks = state.newDecks.filter((deck) => deck.id !== id);
    },
  },
});

export const decksAction = deckSlice.actions;
export default deckSlice.reducer;
