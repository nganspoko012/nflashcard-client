import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Flashcard from "../components/flashcards/Flashcard";
import LearnButtons from "../components/flashcards/LearnButtons";
import LearnProgress from "../components/flashcards/LearnProgress";

const LearnPage = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const { deckId } = useParams();
  const decks = useSelector((state) => state.decks.decks);
  const deck = decks.find((deck) => {
    console.log(deck.id, deckId);
    return deck.id === +deckId;
  });
  console.log(deck);
  const nextHandler = () => {
    let nextIndex =
      currentFlashcardIndex === deck.length - 1
        ? deck.length
        : currentFlashcardIndex + 1;
    setCurrentFlashcardIndex(nextIndex);
  };
  return (
    <div className="w-full md:container mx-auto">
      {deck?.flashcards.length > 0 ? (
        <div className="container w-full md:w-[60vw] max-w-screen-lg mx-auto flex flex-col items-strech gap-4">
          <div>Deck Name</div>
          <LearnProgress
            learnedCards={currentFlashcardIndex}
            totalLearnCards={deck.flashcards.length}
          />
          <Flashcard
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
            frontCard={deck.flashcards[currentFlashcardIndex].frontCard}
            backCard={deck.flashcards[currentFlashcardIndex].backCard}
          />
          {isFlipped && <LearnButtons onClick={nextHandler} />}
        </div>
      ) : (
        <div>Not found!</div>
      )}
    </div>
  );
};

export default LearnPage;
