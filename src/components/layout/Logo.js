import NavItem from "./NavItem";

const Logo = (props) => {
  return (
    <NavItem to="/" className="font-bold hidden md:block mr-auto">
      {props.children}
    </NavItem>
  );
};

export default Logo;
