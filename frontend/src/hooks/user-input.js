import { useState } from "react";

/* We create a custom hook with all the elements repeated in AddFood.js */

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueisTouched, setEnteredValueIsTouched] = useState(false);

  /* We don't want to hard code anything in a custom hooks so we have to pass a function as an argument */
  /*  const enteredValueIsValid = enteredValue.trim() !== ""; */
  const enteredValueIsValid = validateValue(enteredValue);
  const inputValueInvalid = !enteredValueIsValid && enteredValueisTouched;

  const valueInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurValueHandler = (event) => {
    /* The default behaviour is when a form submitted, a HTTP request is sent to the server serving this website automatically. 
    In this case we don't want it to be sent.
    In refs we always access current because they are objects with current properties.*/
    event.preventDefault();

    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    inputValueInvalid,
    valueInputHandler,
    blurValueHandler,
    reset
  };
};

export default useInput;