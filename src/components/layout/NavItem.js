import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  // Main Navigation Items
  let className = `text-white text-center cursor-pointer hover:bg-blue-800 h-auto p-3 block w-full h-full ${
    props.className ? props.className : ""
  }`;
  let activeClassName = " underline font-bold ";
  // Sub Navigations Items
  if (props.type === "subnav") {
    className = `hover:bg-gray-100 block w-full h-full px-4 py-2 ${
      props.className ? props.className : ""
    }`;
    activeClassName = " bg-gray-100 block";
  }
  return (
    <li className={props.isLogo ? "font-bold hidden md:block mr-auto" : ""}>
      <NavLink
        className={({ isActive }) =>
          isActive && props.isActivable
            ? className + activeClassName
            : className
        }
        to={props.to || "/"}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
