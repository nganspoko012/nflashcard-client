import { useCallback, useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlashcardEditor from "./FlashcardEditor";
import Button from "../ui/Button";

const FlashcardInput = ({ id, dispatch }) => {
  const [frontCardValue, setFrontCardValue] = useState("");
  const [backCardValue, setBackCardValue] = useState("");

  const frontCardInputChangeHandler = useCallback(
    (value) => {
      setFrontCardValue(value);
      dispatch({
        type: "CHANGE",
        payload: { id: id, frontCard: value },
      });
    },
    [dispatch, id]
  );

  const backCardInputChangeHandler = useCallback(
    (value) => {
      setBackCardValue(value);
      dispatch({
        type: "CHANGE",
        payload: { id: id, backCard: value },
      });
    },
    [dispatch, id]
  );

  const removeInputHandler = (event) => {
    dispatch({ type: "REMOVE", id: id });
  };

  return (
    <div className="w-full flex flex-nowrap gap-2">
      <div className="w-full">
        <FlashcardEditor
          value={frontCardValue}
          setValue={frontCardInputChangeHandler}
        />
        <div className="text-center text-gray-500">Front Card</div>
      </div>
      <div className="w-full">
        <FlashcardEditor
          value={backCardValue}
          setValue={backCardInputChangeHandler}
        />
        <div className="text-center text-gray-500">Back Card</div>
      </div>
      <Button
        className="w-32 h-full"
        type="cancel"
        onClick={removeInputHandler}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </div>
  );
};

export default FlashcardInput;
