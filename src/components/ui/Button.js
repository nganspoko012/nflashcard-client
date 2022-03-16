const Button = (props) => {
  // Default button
  let className = `text-white bg-blue-500 hover:bg-blue-800 cursor-pointer inline-flex justify-center gap-2 p-2 w-32 ${
    props.className ? props.className : ""
  }`;
  // Cancel button
  if (props.type === "cancel") {
    className = `text-gray-900 bg-white hover:bg-gray-200 cursor-pointer inline-flex justify-center gap-2 p-2 w-32 ${
      props.className ? props.className : ""
    }`;
  }
  return (
    <button
      className={className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
