// AddFood shows the menu to add food to our database

import React, { useState, useEffect, useContext } from "react";

import useInput from "../../hooks/user-input";

import HomeContext from "../../store/home-context";

import classes from "./AddFoodForm.module.css";

const AddFoodForm = (props) => {
  const ctx = useContext(HomeContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const isNotEmptyName = (valuename) => valuename.trim() !== "";
  const isNotEmptyAmount = (valueamount) => valueamount.trim() !== "";
  const isNotEmptyUnits = (valueunits) => valueunits.trim() !== "";
  const isNotEmptyDate = (valuedate) => valuedate.trim() !== "";
  const isNotEmptyId = (valueid) => valueid.trim() !== "";

  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    valueInputHandler: nameInputHandler,
    blurValueHandler: blurNameHandler,
    inputValueInvalid: inputNameInvalid,
    reset: resetNameInput,
  } = useInput(isNotEmptyName);

  const {
    enteredValue: enteredAmount,
    enteredValueIsValid: enteredAmountIsValid,
    valueInputHandler: amountInputHandler,
    blurValueHandler: blurAmountHandler,
    inputValueInvalid: inputAmountInvalid,
    reset: resetAmountInput,
  } = useInput(isNotEmptyAmount);

  const {
    enteredValue: enteredUnits,
    enteredValueIsValid: enteredUnitsIsValid,
    valueInputHandler: unitInputsHandler,
    blurValueHandler: blurUnitsHandler,
    inputValueInvalid: inputUnitsInvalid,
    reset: resetUnitsInput,
  } = useInput(isNotEmptyUnits);

  const {
    enteredValue: enteredDate,
    enteredValueIsValid: enteredDateIsValid,
    valueInputHandler: dateInputHandler,
    blurValueHandler: blurDateHandler,
    inputValueInvalid: inputDateInvalid,
    reset: resetDateInput,
  } = useInput(isNotEmptyDate);

  const {
    enteredValue: enteredId,
    enteredValueIsValid: enteredIdIsValid,
    valueInputHandler: idInputHandler,
    blurValueHandler: blurIdHandler,
    inputValueInvalid: inputIdInvalid,
    reset: resetIdInput,
  } = useInput(isNotEmptyId);

  useEffect(() => {
    if (!props.wanted &&
      enteredAmountIsValid &&
      enteredNameIsValid &&
      enteredUnitsIsValid &&
      enteredDateIsValid
    ) {
      setFormIsValid(true);
    } 
      else if (props.wanted && enteredIdIsValid &&
      enteredAmountIsValid &&
      enteredNameIsValid &&
      enteredUnitsIsValid &&
      enteredDateIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    enteredAmountIsValid,
    enteredNameIsValid,
    enteredUnitsIsValid,
    enteredDateIsValid,
    enteredIdIsValid,
    props.wanted,
  ]);

  const item = {
    name: enteredName,
    amount: enteredAmount,
    units: enteredUnits,
    date: enteredDate,
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (!props.onWanted) {
      props.onConfirm({
        item: item,
      });
    }

    // If the page using the AddFood component is WANTED
    // we use useContext to safe the ShoppingList. Once finished we pass all the info vía ADD TO HOME button
    else if (props.onWanted) {
      ctx.addItem({
        key: enteredId,
        name: enteredName,
        amount: enteredAmount,
        units: enteredUnits,
        date: enteredDate,
      });

      props.onAdd();
    }

    if (props.onWanted){
      resetIdInput();
    }
    resetNameInput();
    resetAmountInput();
    resetUnitsInput();
    resetDateInput();
  };

  const inputValidClasses = `${classes.control} ${
    inputNameInvalid ? "" : classes.invalid
  }`;

  const inputAmountValidClasses = `${classes.control} ${
    inputAmountInvalid ? "" : classes.invalid
  }`;

  const wantedDiv = (
    <div className={inputValidClasses}>
      <label htmlFor="Id">Id</label>
      <input
        type="text"
        id="id"
        onChange={idInputHandler}
        onBlur={blurIdHandler}
        valuedate={enteredId}
      />
      {inputIdInvalid && <p className="error-text">Id must not be empty</p>}
    </div>
  );



  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={inputValidClasses}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={blurNameHandler}
          valuename={enteredName}
        />
        {inputNameInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={inputAmountValidClasses}>
        <label htmlFor="Amount">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={amountInputHandler}
          onBlur={blurAmountHandler}
          valueamount={enteredAmount}
        />
        {inputAmountInvalid && (
          <p className="error-text">Amount must not be empty</p>
        )}
      </div>
      <div className={inputValidClasses}>
        <label htmlFor="Units">Units</label>
        <input
          type="text"
          id="units"
          onChange={unitInputsHandler}
          onBlur={blurUnitsHandler}
          valueunits={enteredUnits}
        />
        {inputUnitsInvalid && (
          <p className="error-text">Units must not be empty</p>
        )}
      </div>
      <div className={inputValidClasses}>
        <label htmlFor="Date">Date</label>
        <input
          type="date"
          id="date"
          onChange={dateInputHandler}
          onBlur={blurDateHandler}
          valuedate={enteredDate}
        />
        {inputDateInvalid && (
          <p className="error-text">Date must not be empty</p>
        )}
      </div>
      {props.onWanted && wantedDiv}
      <div className={classes.actions}>
        <button>Submit</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </form>
  );
};

// WantedFood
// AddFood
export default AddFoodForm;
// Modal

// En AddFood tengo que meter el context para el botón de añadir item a la base de datos
// quizá sería bueno crear un addfoodForm para gestionar el input
// del cliente dentro de otro componente y dejar este más limpio
