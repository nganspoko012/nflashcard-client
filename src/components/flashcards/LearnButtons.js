const LearnButtons = (props) => {
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
