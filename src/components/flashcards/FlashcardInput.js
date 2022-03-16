import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlashcardEditor from "../../pages/FlashcardEditor";
import Button from "../ui/Button";

const FlashcardInput = (props) => {
  const [frontCardValue, setFrontCardValue] = useState("");
  const [backCardValue, setBackCardValue] = useState("");

  const removeInputHandler = (event) => {
    props.onRemoveInput(props.id);
  };

  return (
    <div className="w-full flex flex-nowrap gap-2">
      <div className="w-full">
        <FlashcardEditor value={frontCardValue} setValue={setFrontCardValue} />
        <div className="text-center text-gray-500">Front Card</div>
      </div>
      <div className="w-full">
        <FlashcardEditor value={backCardValue} setValue={setBackCardValue} />
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
