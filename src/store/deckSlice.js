import { createSlice } from "@reduxjs/toolkit";
import { STARTING_EASE } from "../util/newInterval";

let DUMMY_DECKS = [
  {
    id: 1,
    title: "600 Essential Words For TOEIC",
    scope: "private",
    author: {
      name: "Ngan Vo",
    },
    flashcards: [
      {
        id: 1,
        frontCard: "<p>Test 1</p>",
        backCard: "<p>Kiem Tra 1</p>",
        status: "new",
        steps_index: 0,
        lastedLearnDate: Date.now(),
        ease_factor: STARTING_EASE,
        interval: 0,
      },
      {
        id: 2,
        frontCard: "<p>Test 2</p>",
        backCard: "<p>Kiem Tra 2</p>",
        status: "new",
        steps_index: 0,
        lastedLearnDate: Date.now(),
        ease_factor: STARTING_EASE,
        interval: 0,
      },
    ],
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
    flashcards: [],
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
    flashcards: [
      {
        id: 1,
        frontCard: "<p>Test</p>",
        backCard: "<p>Kiem Tra</p>",
      },
    ],

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
