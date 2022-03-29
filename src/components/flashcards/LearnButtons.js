import { getNewInterval, humanFriendlyTime } from "../../util/newInterval";
import { learnActions } from "../../store/learnSlice";
import { useDispatch } from "react-redux";

const NEW_OPTIONS = ["again", "good", "easy"];
const REVIEW_OPTIONS = ["again", "hard", "good", "easy"];
const RELEARN_OPTIONS = ["again", "good"];

const LearnButton = (props) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    event.preventDefault();
    try {
      const { newCard, newInterval } = getNewInterval(props.card, props.option);
      dispatch(learnActions.learnACard({ card: newCard, newInterval }));
      dispatch(learnActions.flipCard({ isFlipped: false }));
    } catch (error) {
      console.log(error.message);
    }
  };
  let bgColor = "bg-red-500";
  if (props.option === "hard") {
    bgColor = "bg-orange-500";
  } else if (props.option === "good") {
    bgColor = "bg-green-500";
  } else if (props.option === "easy") {
    bgColor = "bg-blue-500";
  }
  return (
    <button
      className={`${bgColor} h-full flex flex-col items-center justify-center capitalize`}
      onClick={clickHandler}
    >
      <div>{props.option}</div>
      <div>{props.uiInterval}</div>
    </button>
  );
};

const LearnButtons = (props) => {
  let buttons = null;
  let gridCols = "";

  const mapOptions = (options) => {
    return options.map((option) => {
      const { newInterval } = getNewInterval(props.card, option);
      console.log(newInterval);
      return (
        <LearnButton
          key={option}
          card={props.card}
          option={option}
          uiInterval={humanFriendlyTime(newInterval)}
        />
      );
    });
  };

  switch (props.card.status) {
    case "new":
      gridCols = "grid-cols-3";
      buttons = mapOptions(NEW_OPTIONS);
      break;
    case "learned":
      gridCols = "grid-cols-4";
      buttons = mapOptions(REVIEW_OPTIONS);
      break;
    case "relearning":
      gridCols = "grid-cols-2";
      buttons = mapOptions(RELEARN_OPTIONS);
      break;
    default: {
      return <div>Some thing went wrong with this flashcard!</div>;
    }
  }
  return (
    <div className={`w-full h-16 grid ${gridCols} text-white`}>{buttons}</div>
  );
};

export default LearnButtons;
