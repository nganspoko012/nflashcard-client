const flashcardInputsReducer = (flashcardInputs, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(flashcardInputs);
      return flashcardInputs.concat({
        id: flashcardInputs.length + 1,
        frontCard: "",
        backCard: "",
        status: "new",
        steps_index: 0,
      });
    }
    case "CHANGE": {
      const newFlashcardInputs = [...flashcardInputs];
      let editingFlashcardId = newFlashcardInputs.findIndex(
        (input) => input.id === action.payload.id
      );
      newFlashcardInputs[editingFlashcardId] = {
        ...newFlashcardInputs[editingFlashcardId],
        ...action.payload,
      };
      return newFlashcardInputs;
    }
    case "REMOVE": {
      return flashcardInputs.filter((input) => input.id !== action.id);
    }
    default:
      return flashcardInputs;
  }
};

export default flashcardInputsReducer;
