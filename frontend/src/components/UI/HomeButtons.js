// AtHome is the page where i can see all the products I have at home.
// A table will be displayed with several items
// We'll treat the table as a list of elements/objects with information

import React from "react";
import classes from "../UI/HomeButtons.module.css";

const HomeButtons = (props) => {
  return (
    <React.Fragment>
      <span className={classes.span}>
        <button className={classes.btnA} onClick={props.onClick}>
         ADD
        </button>
        <button className={classes.btnU} /*  onClick={props.onShow} */>
          UPDATE
        </button>
      </span>
    </React.Fragment>
  );
};

// AtHome
export default HomeButtons;
