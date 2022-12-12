// We create a MODAL so whenever we click on ADD or UPDATE, the web blocks the interaction
// with everything but the add/update menu.
// So we put our custom component AddFood over the rest of the page.

import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";


// It's behind the modal overlay and blocks the interaction,
// with the rest of the page
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
  /* return <div className={classes.backdrop} onClick={props.onClose}/>; */
};

// The modal itself
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// How we pass the modal to the index HTML file
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}/>,
        /* <Backdrop onClick={props.onClose}/>, */
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modalOverlay-root")
      )}
    </React.Fragment>
  );
};

// AddFood
export default Modal;
