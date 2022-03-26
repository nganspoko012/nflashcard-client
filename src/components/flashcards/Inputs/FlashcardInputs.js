import FlashcardInput from "./FlashcardInput";
import Button from "../../ui/Button";

const FlashcardInputs = ({ flashcardInputs, dispatchFlashcardInputs }) => {
  return (
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
  );
};

export default FlashcardInputs;
