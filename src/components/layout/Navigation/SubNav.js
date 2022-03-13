import NavItem from "./NavItem";

const SubNav = () => {
  return (
    <nav className="fixed top-12 w-36 h-full bg-white shadow-lg z-10 divide-y divide-gray-100">
      <ul>
        <NavItem to="/decks" type="subnav" isActivable={true}>
          My Decks
        </NavItem>
        <NavItem to="/statistics" type="subnav" isActivable={true}>
          Statistics
        </NavItem>
        <NavItem to="/favorites" type="subnav" isActivable={true}>
          Favorites
        </NavItem>
      </ul>
    </nav>
  );
};

export default SubNav;
