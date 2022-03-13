import { useNavigate } from "react-router-dom";

import Deck from "./Deck";
import Button from "../ui/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const DecksList = (props) => {
  let navigate = useNavigate();
  const decks = useSelector((state) => state.decks.decks);
  const addButtonClickHandler = (event) => {
    event.preventDefault();
    navigate("/add-deck");
  };
  return (
    <div className="w-full md:container md:mx-auto">
      <div className="flex justify-end">
        <Button onClick={addButtonClickHandler}>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          Add Deck
        </Button>
      </div>

      <ul className="flex flex-col md:flex-row justify-center md:justify-start md:flex-wrap mt-4">
        {decks.map((deck) => (
          <li className="w-full md:w-1/3 lg:w-1/4 shrink-0 p-1" key={deck.id}>
            <Deck {...deck} type="community" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DecksList;
