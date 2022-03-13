import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEllipsisVertical,
  faEarthAmericas,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../ui/Avatar";
import Card from "../ui/Card";
import DeckMenu from "./DeckMenu";
import { useState } from "react";
import Modal from "../ui/Modal";
import { decksAction } from "../../store/deck-slice";
import { useDispatch } from "react-redux";

const Deck = (props) => {
  const dispatch = useDispatch();
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  //private scope
  let scopeIcon = faLock;
  if (props.scope === "public") {
    scopeIcon = faEarthAmericas;
  }
  return (
    <Card className="h-32 max-w-72 flex m-auto flex-col p-2 bg-white">
      <div className="flex flex-nowrap">
        <h3 className="font-bold w-10/12">{props.title}</h3>
        {/* For Overlay options */}
        <div className="relative ml-auto flex flex-nowrap gap-1 self-start">
          <div>
            <FontAwesomeIcon icon={scopeIcon} className="w-4" />
          </div>
          <div>
            <DeckMenu onDelete={() => setIsShowDeleteModal(true)}>
              <FontAwesomeIcon icon={faEllipsisVertical} className="w-4" />
            </DeckMenu>
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap mt-auto items-center gap-1">
        <Avatar />
        <span>{props.author.name}</span>
        {props.type === "community" ? (
          <div className="flex flex-nowrap gap-2 ml-auto ">
            <div>
              <span>{props.avgStars}</span>
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <div className="text-gray-400 font-medium">
              <span>{props.totalCards} </span>
              <span>cards</span>
            </div>
          </div>
        ) : (
          <div className="ml-auto">
            <span>Due: </span>
            <span>{props.dueCards || 10}</span>
          </div>
        )}
      </div>
      {isShowDeleteModal && (
        <Modal
          isOpen={isShowDeleteModal}
          setIsOpen={setIsShowDeleteModal}
          title="Do you want to delete this deck?"
          description="When delete a deck you can't track your progress in that deck anymore."
          onConfirm={() => {
            dispatch(decksAction.removeDeck(props.id));
            setIsShowDeleteModal(false);
          }}
        />
      )}
    </Card>
  );
};

export default Deck;
