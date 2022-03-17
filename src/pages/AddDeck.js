import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import useInput from "../hooks/use-input";
import { decksAction } from "../store/deck-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import DOMPurify from "dompurify";
import FlashcardInput from "../components/flashcards/FlashcardInput";

const flashcardInputsReducer = (flashcardInputs, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(flashcardInputs);
      return flashcardInputs.concat({
        id: flashcardInputs.length + 1,
        frontCard: "",
        backCard: "",
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

const AddDeck = (props) => {
  const decksCount = useSelector((state) => state.decks.decks.length);
  const [flashcardInputs, dispatchFlashcardInputs] = useReducer(
    flashcardInputsReducer,
    []
  );
  const dispatchDeck = useDispatch();
  const navigate = useNavigate();

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    onChange: onTitleChanged,
    onBlur: onTitleBlur,
  } = useInput((value) => value.trim().length > 3);

  const {
    value: desValue,
    isValid: desIsValid,
    hasError: desHasError,
    onChange: onDesChanged,
    onBlur: onDesBlur,
  } = useInput((value) => value.trim().length > 3);

  const submitHandler = (event) => {
    event.preventDefault();
    const flashcards = flashcardInputs
      .filter((input) => input.frontCard !== "" && input.backCard !== "")
      .map((input) => ({
        ...input,
        frontCard: DOMPurify.sanitize(input.frontCard),
        backCard: DOMPurify.sanitize(input.backCard),
      }));
    const deckToAdd = {
      id: decksCount + 1,
      title: titleValue,
      scope: "public",
      author: {
        name: "Ngan Vo",
      },
      flashcards: flashcards,
      dueCards: 0,
      totalCards: flashcards.length,
      avgStars: 0,
    };
    dispatchDeck(decksAction.addDeck(deckToAdd));
    navigate("/decks");
  };
  return (
    <div className="container mx-auto">
      <h3 className="text-lg font-gray-900 font-bold text-left">
        Add New Deck
      </h3>
      <form onSubmit={submitHandler} className="w-full mt-4">
        <div className="text-left rounded-md ring-1 ring-gray-200 shadow-lg p-4">
          <h4 className="font-bold">Deck Info</h4>
          <label htmlFor="title" className="block font-lg font-bold text">
            Title:
          </label>
          <Input
            type="text"
            id="title"
            errorMessage="Title must have length larger than 3"
            placeholder="Deck title"
            hasError={titleHasError}
            value={titleValue}
            onChange={onTitleChanged}
            onBlur={onTitleBlur}
            isValid={titleIsValid}
          />
          <label htmlFor="description" className="block font-lg font-bold">
            Description
          </label>
          <Input
            type="text"
            id="description"
            hasError={desHasError}
            errorMessage="Description must have length larger than 3"
            placeholder="Add description ..."
            value={desValue}
            onChange={onDesChanged}
            onBlur={onDesBlur}
            isValid={desIsValid}
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button type="submit">Add</Button>
        </div>
        <div className="w-full mt-4 rounded-md ring-1 ring-gray-200 shadow-lg p-4">
          {flashcardInputs.map((flashcardInput) => (
            <FlashcardInput
              key={flashcardInput.id}
              id={flashcardInput.id}
              dispatch={dispatchFlashcardInputs}
            />
          ))}
          <div className="flex">
            <Button
              className="mx-auto"
              onClick={() => dispatchFlashcardInputs({ type: "ADD" })}
            >
              Add Flashcard
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDeck;
