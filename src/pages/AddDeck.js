import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import FlashcardEditor from "./FlashcardEditor";
import useInput from "../hooks/use-input";
import { decksAction } from "../store/deck-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FlashcardInput from "../components/flashcards/FlashcardInput";

const AddDeck = (props) => {
  const decksCount = useSelector((state) => state.decks.decks.length + 1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [flashcardInputs, setFlashcardInputs] = useState([]);
  const addFlashcardHandler = (event) => {
    event.preventDefault();
    setFlashcardInputs((prevFlashcardInput) =>
      prevFlashcardInput.concat({
        id: prevFlashcardInput.length + 1,
        frontCard: "",
        backCard: "",
      })
    );
  };
  const removeInputHandler = (id) => {
    setFlashcardInputs((prevFlashcardInput) =>
      prevFlashcardInput.filter((flashcardInput) => flashcardInput.id !== id)
    );
  };
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
    const deckToAdd = {
      id: decksCount + 1,
      title: titleValue,
      scope: "public",
      author: {
        name: "Ngan Vo",
      },
      dueCards: 0,
      totalCards: 0,
      avgStars: 0,
    };
    dispatch(decksAction.addDeck(deckToAdd));
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
              onRemoveInput={removeInputHandler}
            />
          ))}
          <div className="flex">
            <Button className="mx-auto" onClick={addFlashcardHandler}>
              Add Flashcard
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDeck;