// WANTEDFood shows the menu to add food to ATHOME -> MODAL

import Modal from "../UI/Modal";
import React, { useState } from "react";
import AddFoodForm from "./AddFoodForm";

const WantedFood = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);

  const confirmHandler = () => {
    setDidSubmit(true);
    props.onAdded();
  };

  const didSubmitContent = <p>Successfully added the item!</p>;

  return (
    <Modal onClose={props.onClose}>
      <AddFoodForm
        onWanted={props.onWanted}
        onClose={props.onClose}
        onAdd={confirmHandler}
      />
      {didSubmit && didSubmitContent}
    </Modal>
  );
};

// Wanted
export default WantedFood;
// Modal
// Add Food Form
