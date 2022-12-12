// AddFood shows the menu to add food to our database

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Modal from "../UI/Modal";
import useHttp from "../../hooks/use-http";
import AddFoodForm from "./AddFoodForm";
import { addFood } from "../../lib/api";

const AddFood = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const { sendRequest, status } = useHttp(addFood);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/athome");
    }
  }, [status, navigate]);

  const confirmHandler = (item) => {
    setIsSubmitting(true);
    sendRequest(item);
    setIsSubmitting(false);
    setDidSubmit(true);
    props.onSubmited();
  };

  const wanted = false;

  const isSubmittingContent = <p>Sending order data...</p>;
  const didSubmitContent = <p>Successfully added the item!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && <AddFoodForm onWanted={wanted} onClose={props.onClose} onConfirm={confirmHandler} />}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

// AtHome
export default AddFood;
// Modal

// En AddFood tengo que meter el context para el botón de añadir item a la base de datos
// quizá sería bueno crear un addfoodForm para gestionar el input
// del cliente dentro de otro componente y dejar este más limpio