import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { faPlus, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const DeckMenu = (props) => {
  const navigate = useNavigate();
  const options = [
    { text: "Add Flashcard", icon: faPlus, onClick: () => {} },
    {
      text: "View Detail",
      icon: faEye,
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        navigate(`/deck-details/${props.id}`);
      },
    },
    {
      text: "Delete Deck",
      icon: faTrashCan,
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.onDelete();
      },
    },
  ];

  return (
    <Menu>
      <Menu.Button
        className="hover:text-white hover:bg-blue-500 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 w-56 mt-2 origin-top-right flex flex-col bg-white divide-y 
          divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="px-1 py-1">
            {options.map((option) => (
              <Menu.Item key={option.text}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : ""
                    } block flex rounded-md items-center w-full px-2 py-2 gap-2 text-sm`}
                    onClick={option.onClick}
                  >
                    <FontAwesomeIcon icon={option.icon} />
                    {option.text}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DeckMenu;
