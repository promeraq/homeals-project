import React from "react";
import classes from "../UI/WantedButtons.module.css";

const WantedButtons = (props) => {
  return (
    <React.Fragment>
      <span className={classes.span}>
        <button className={classes.btnA} onClick={props.onClick}>
         NEW ITEM
        </button>
        <button className={classes.btnU} onClick={props.onAdd} >
          ADD TO HOME
        </button>
      </span>
    </React.Fragment>
  );
};

// Wanted
export default WantedButtons;
