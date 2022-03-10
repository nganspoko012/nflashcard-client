import NavItem from "./NavItem";
import Logo from "./Logo";
import Bars from "./Bars";

const MainNav = (props) => {
  return (
    <header>
      <nav>
        <ul className="z-10 md:fixed flex flex-col md:flex-row flex-wrap md:px-4 md:gap-x-2 md:gap-y-0 justify-start md:justify-end w-full bg-blue-500">
          <Bars onToggleBars={props.onToggleBars} />
          <Logo>NFlashcard</Logo>
          <NavItem to="/decks">Decks</NavItem>
          <NavItem to="/about-us">About Us</NavItem>
          <NavItem to="/community">Community</NavItem>
          <NavItem to="/login">Login</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;