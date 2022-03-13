import { useState } from "react";

const useInput = (validator = () => true) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validator(value);
  const hasError = !isValid && isTouched;

  const valueChangedHandler = (event) => {
    setValue(event.target.value);
  };

  const blurChangeHandler = (event) => {
    setIsTouched(true);
  };

  return {
    value,
    isValid,
    hasError,
    onChange: valueChangedHandler,
    onBlur: blurChangeHandler,
  };
};

export default useInput;
