// New Card Status
const NEW_STEPS = [1, 10]; // minutes
const GRADUATE_INTERVAL = 1; // days
const EASY_INTERVAL = 4; // days
const STARTING_EASE = 250; // percents
const NEW_OPTIONS = ["again", "good"];

// Review Card Status
const REVIEW_OPTIONS = ["again", "hard", "good", "easy"];
const EASY_BONUS = 130; // percents
const INTERVAL_MODIFIER = 100; // percents
const MAXIMUM_INTERVAL = 36500; //d ays

// Lapses Status
const LAPSES_STEPS = [10]; // minutes
const NEW_INTERVAL = 70; // percents
const MINIMUM_INTERVAL = 1; // days

const LearnButtons = (props) => {
  const learnButtonClickHandler = (option) => {
    switch (props.status) {
      case "new": {
        switch (option) {
          case "again": {
            props.steps_index = 0;
            return 1;
          }
        }
      }
    }
  };
  return (
    <div
      className="w-full h-16 grid grid-cols-4 text-white"
      onClick={props.onClick}
    >
      <div className="bg-red-500 h-full    flex flex-col items-center justify-center">
        <div>Again</div>
        <div>1min</div>
      </div>
      <div className="bg-orange-500 h-full flex flex-col items-center justify-center">
        <div>Hard</div>
        <div>10min</div>
      </div>
      <div className="bg-blue-500 h-full   flex flex-col items-center justify-center">
        <div>Good</div>
        <div>1d</div>
      </div>
      <div className="bg-green-500 h-full  flex flex-col items-center justify-center">
        <div>Easy</div>
        <div>4d</div>
      </div>
    </div>
  );
};

export default LearnButtons;
