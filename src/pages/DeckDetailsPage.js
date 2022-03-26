import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import useInput from "../hooks/use-input";
import { decksAction } from "../store/deckSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import FlashcardInputs from "../components/flashcards/Inputs/FlashcardInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faLock } from "@fortawesome/free-solid-svg-icons";
import flashcardInputsReducer from "../store/reducer/flashcardInputsReducer";

const DeckDetailsPage = (props) => {
  const { deckId: id } = useParams();
  const dispatchDeck = useDispatch();
  const navigate = useNavigate();

  const currentDeck = useSelector((state) =>
    state.decks.decks.find((deck) => deck.id === +id)
  );
  const [flashcardInputs, dispatchFlashcardInputs] = useReducer(
    flashcardInputsReducer,
    []
  );

  const [deckScope, setDeckScope] = useState("public");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (!currentDeck) {
      navigate("/decks");
    }
  }, [currentDeck, navigate]);

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    onChange: onTitleChanged,
    onBlur: onTitleBlur,
  } = useInput((value) => value.trim().length > 3, currentDeck.title);

  const {
    value: desValue,
    isValid: desIsValid,
    hasError: desHasError,
    onChange: onDesChanged,
    onBlur: onDesBlur,
  } = useInput((value) => value.trim().length > 3, currentDeck.description);

  const changeScopeHandler = () => {
    if (!isEdit) return;
    deckScope === "public" ? setDeckScope("private") : setDeckScope("public");
  };

  const editHandler = (event, value) => {
    event.preventDefault();
    event.stopPropagation();
    setIsEdit(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const flashcards = flashcardInputs
      .filter((input) => input.frontCard !== "" && input.backCard !== "")
      .map((input) => ({
        ...input,
        frontCard: DOMPurify.sanitize(input.frontCard),
        backCard: DOMPurify.sanitize(input.backCard),
      }));
    const deckToChange = {
      id: +id,
      title: titleValue,
      description: desValue,
      scope: deckScope,
      author: {
        name: "Bots",
      },
      flashcards,
      dueCards: 0,
      totalCards: flashcards.length,
      avgStars: 0,
    };

    dispatchDeck(decksAction.changeDeck(deckToChange));
    navigate("/decks");
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={submitHandler} className="w-full mt-4">
        {isEdit ? (
          <div className="flex justify-end mb-4 gap-2">
            <Button
              type="cancel"
              onClick={(event) => editHandler(event, false)}
            >
              Cancel
            </Button>
            <Button type="submit">Complete</Button>
          </div>
        ) : (
          <div className="flex justify-end mb-4">
            <Button type="button" onClick={(event) => editHandler(event, true)}>
              Edit
            </Button>
          </div>
        )}
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
                  width={32}
                  height={32}
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
            readOnly={isEdit ? false : true}
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
            readOnly={isEdit ? false : true}
          />
        </div>

        <FlashcardInputs
          flashcardInputs={flashcardInputs}
          dispatchFlashcardInputs={dispatchFlashcardInputs}
        />
      </form>
    </div>
  );
};

export default DeckDetailsPage;
