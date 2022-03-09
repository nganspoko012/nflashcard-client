import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li
      className={`text-white text-center cursor-pointer hover:bg-blue-800 h-auto p-3 ${props.className}`}
    >
      <Link to={props.to || "/"}> {props.children}</Link>
    </li>
  );
};

export default NavItem;
