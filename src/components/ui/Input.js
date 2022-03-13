const Input = (props) => {
  const { isValid, hasError, errorMessage, ...inputAttribute } = props;
  return (
    <div
      className={`w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-blue-500 ${
        hasError ? "border-rose-600" : ""
      }`}
    >
      {hasError && <div className="text-rose-600 italic">{errorMessage}</div>}
      <input
        {...inputAttribute}
        type={props.type || "text"}
        className={`w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none`}
      />
    </div>
  );
};

export default Input;
