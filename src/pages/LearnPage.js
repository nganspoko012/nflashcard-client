import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { learnActions } from "../store/learnSlice";
import Flashcard from "../components/flashcards/Flashcard";
import LearnButtons from "../components/flashcards/LearnButtons";
import LearnProgress from "../components/flashcards/LearnProgress";

const LearnPage = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const deck = useSelector((state) =>
    state.decks.decks.find((deck) => deck.id === +deckId)
  );

  useEffect(() => {
    dispatch(
      learnActions.start({
        deckId: deck.id,
        dueCards: deck.flashcards.filter((flashcard) => {
          const dueDate = flashcard.lastedLearnDate + flashcard.interval;
          const today = Date.now();
          if (today - dueDate > 0) {
            return true;
          }
          return false;
        }),
      })
    );
  }, [deck, dispatch]);

  const dueCards = useSelector((state) => state.learn.dueCards);
  const completedCards = useSelector((state) => state.learn.completedCards);

  return (
    <div className="w-full md:container mx-auto">
      {dueCards.length > 0 ? (
        <div className="container w-full md:w-[60vw] max-w-screen-lg mx-auto flex flex-col items-strech gap-4">
          <div>Deck Name</div>
          <LearnProgress
            learnedCards={completedCards.length}
            totalLearnCards={dueCards.length + completedCards.length}
          />
          <Flashcard
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
            frontCard={dueCards[0].frontCard}
            backCard={dueCards[0].backCard}
          />
          {isFlipped && <LearnButtons card={dueCards[0]} />}
        </div>
      ) : (
        <div>Not found!</div>
      )}
    </div>
  );
};

export default LearnPage;
