import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DecksList from "../components/decks/DecksList";
import Button from "../components/ui/Button";

const HomePage = (props) => {
  const navigate = useNavigate();
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

      <DecksList />
    </div>
  );
};

export default HomePage;
