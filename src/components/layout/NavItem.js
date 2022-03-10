import { Link } from "react-router-dom";

const NavItem = (props) => {
  let className = `text-white text-center cursor-pointer hover:bg-blue-800 h-auto p-3 ${
    props.className ? props.className : ""
  }`;
  if (props.type === "subnav") {
    className = `hover:bg-gray-200 px-4 py-2 ${
      props.className ? props.className : ""
    }`;
  }
  return (
    <li className={className}>
      <Link to={props.to || "/"}>{props.children}</Link>
    </li>
  );
};

export default NavItem;
