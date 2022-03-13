import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Bars = (props) => {
  return (
    <li>
      <button
        onClick={props.onToggleBars}
        className="text-white hover:bg-blue-800 pointer-cursor active:bg-blue-200 w-12 h-full"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </li>
  );
};

export default Bars;
