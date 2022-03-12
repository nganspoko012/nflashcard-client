import NavItem from "./NavItem";

const Logo = (props) => {
  return (
    <NavItem to="/" isActivable={false} isLogo={true}>
      {props.children}
    </NavItem>
  );
};

export default Logo;
