const Card = (props) => {
  return (
    <div
      className={`rounded ring-2 ring-gray-200 shadow-md hover:ring-blue-500 forcus:ring-blue-500 cursor-pointer ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
