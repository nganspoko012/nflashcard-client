import NavItem from "./NavItem";

const SubNav = () => {
  return (
    <nav className="fixed top-12 w-36 h-full bg-white z-10">
      <ul>
        <NavItem to="/decks" type="subnav">
          My Decks
        </NavItem>
        <NavItem to="/decks" type="subnav">
          Statistics
        </NavItem>
        <NavItem to="/decks" type="subnav">
          Favorites
        </NavItem>
      </ul>
    </nav>
  );
};

export default SubNav;
