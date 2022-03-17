const LearnProgress = (props) => {
  const progressPercent = Math.floor(
    (props.learnedCards / props.totalLearnCards) * 100
  );

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="self-end">
        {props.learnedCards} / {props.totalLearnCards}
      </div>
      {/**Progress wrapper */}
      <div className="relative w-full bg-gray-200 h-4 rounded-lg">
        {/**Progress bar */}
        <div
          className={`absolute h-full bg-green-500 rounded-l-lg ${
            progressPercent === 100 ? "rounded-r-lg" : ""
          }`}
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LearnProgress;
