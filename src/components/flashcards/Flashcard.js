import styles from "./Flashcard.module.css";

const Flashcard = ({ isFlipped, onFlip = () => {}, frontCard, backCard }) => {
  return (
    <div
      className={`w-full h-[40vh] md:h-[50vh] relative preserve-3d ${
        isFlipped ? styles.flip : ""
      } transition-transform`}
      onClick={onFlip}
    >
      <div
        className="absolute w-full h-full bg-white shadow-md backface-hidden z-10"
        dangerouslySetInnerHTML={{ __html: frontCard }}
      ></div>
      {/*Back card*/}
      <div
        className={`absolute w-full h-full bg-white shadow-md backface-hidden z-10 ${styles["flashcard-back"]}`}
        dangerouslySetInnerHTML={{ __html: backCard }}
      ></div>
    </div>
  );
};

export default Flashcard;
