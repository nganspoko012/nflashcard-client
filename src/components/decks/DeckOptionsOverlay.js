const options = ["Add Flashcard", "View Detail", "Delete Deck"];

const DeckOptionsOverlay = (props) => {
  return (
    <ul className="absolute rounded top-4 left-4 z-10 shadow-md bg-white w-48 h-fit">
      {options.map((option) => (
        <li className="hover:bg-gray-200 cursor-pointer" key={option}>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default DeckOptionsOverlay;
