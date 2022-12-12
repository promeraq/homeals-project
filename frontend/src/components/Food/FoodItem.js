// Each FoodItem is a row of the table the client sees (actual list)
// and have info about it: name, amount, description and date

import React from "react";

import classes from "./FoodItem.module.css";

const FoodItem = (props) => {

  return (
      <tr className={classes.tr}>
        <td>{props.name}</td>
        <td>{props.amount}</td>
        <td>{props.units}</td>
        <td>{props.date}</td>
        <td>
          <button className={classes.button} onClick={props.onDelete}>
            -
          </button>
        </td>
      </tr>
  );
};

// AtHomeList
export default React.memo(FoodItem);
