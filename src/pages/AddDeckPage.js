import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import useInput from "../hooks/use-input";
import { decksAction } from "../store/deckSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faLock } from "@fortawesome/free-solid-svg-icons";
import FlashcardInputs from "../components/flashcards/Inputs/FlashcardInputs";
import flashcardInputsReducer from "../store/reducer/flashcardInputsReducer";

const AddDeckPage = (props) => {
  const decksCount = useSelector((state) => state.decks.decks.length);
  const [flashcardInputs, dispatchFlashcardInputs] = useReducer(
    flashcardInputsReducer,
    []
  );

  const [deckScope, setDeckScope] = useState("public");
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

  const changeScopeHandler = () => {
    deckScope === "public" ? setDeckScope("private") : setDeckScope("public");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
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
      <form onSubmit={submitHandler} className="w-full mt-4">
        <div className="text-left rounded-md ring-1 ring-gray-200 shadow-lg p-4">
          <div className="flex flex-row">
            <h4 className="font-bold text-xl">Deck Infomation</h4>
            <button
              className="block ml-auto"
              type="button"
              title="Deck scope"
              onClick={changeScopeHandler}
            >
              {
                <FontAwesomeIcon
                  icon={deckScope === "public" ? faGlobeAmericas : faLock}
                />
              }
            </button>
          </div>

          <label
            htmlFor="title"
            className="block mt-4 font-lg font-bold text-gray-500 text-lg"
          >
            Title
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
          <label
            htmlFor="description"
            className="block font-lg font-bold text-gray-500 text-lg"
          >
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

        <FlashcardInputs
          flashcardInputs={flashcardInputs}
          dispatchFlashcardInputs={dispatchFlashcardInputs}
        />

        <div className="flex justify-end mt-4">
          <Button type="submit">Complete</Button>
        </div>
      </form>
    </div>
  );
};

export default AddDeckPage;
