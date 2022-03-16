import { useState } from "react";
import styles from "./Flashcard.module.css";

const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="mt-32">
      <div>Deck name</div>
      <div
        className={`container w-48 h-48 relative preserve-3d ${
          isFlipped ? styles.flip : ""
        } transition-transform`}
        onClick={() => setIsFlipped((prevState) => !prevState)}
      >
        <div className="absolute w-full h-full bg-white shadow-lg backface-hidden z-10">
          Front Card
        </div>
        {/*Back card*/}
        <div
          className={`absolute w-full h-full bg-white shadow-lg backface-hidden z-10 ${styles["flashcard-back"]}`}
        >
          Back Card
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
