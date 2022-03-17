import Deck from "./Deck";
import { useSelector } from "react-redux";

const DecksList = (props) => {
  const decks = useSelector((state) => state.decks.decks);

  return (
    <ul className="flex flex-col md:flex-row justify-center md:justify-start md:flex-wrap mt-4">
      {decks.map((deck) => (
        <li className="w-full md:w-1/3 lg:w-1/4 shrink-0 p-1" key={deck.id}>
          <Deck {...deck} type="community" />
        </li>
      ))}
    </ul>
  );
};

export default DecksList;
