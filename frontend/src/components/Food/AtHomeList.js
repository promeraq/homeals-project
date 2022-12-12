// AtHomeList is the list of food items I have AtHome.
// I can add, update or delete items from it

import React from "react";
/* import React, { useContext } from "react";
import HomeContext from "../../store/home-context"; */

import classes from "./AtHomeList.module.css";
import FoodItem from "./FoodItem";

const AtHomeList = React.memo((props) => {


  const foodList = props.items;

  // To access the name
  // const items = foodList[0].item.name;
  const deleteHandler = (id) => {
    props.onDeleteItem(id);
  };

  return (
    <React.Fragment>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Units</th>
            <th>Date</th>
            <th>Delete (double click)</th>
          </tr>
        </thead>
        <tbody className={classes.foodli}>
          {foodList.map((obj) => (
            <FoodItem
              key={obj.id}
              id={obj.id}
              name={obj.item.name}
              amount={obj.item.amount}
              date={obj.item.date}
              units={obj.item.units}
              onDelete={deleteHandler.bind(null, obj.id)}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
});

// AtHome
export default AtHomeList;
// Food Item

/*     <React.Fragment>
      <section>
        <ul className={classes.ul}>
          <li>Name</li>
          <li>Amount</li>
          <li>Units</li>
          <li>Date</li>
          <li>Delete</li>
        </ul>
      </section>
      <ul className={classes.foodli}>
        {foodList.map((obj) => (
          <FoodItem
            key={obj.id}
            id={obj.id}
            name={obj.item.name}
            amount={obj.item.amount}
            date={obj.item.date}
            units={obj.item.units}
            clicked={obj.item.clicked}
          />
        ))}
      </ul>
    </React.Fragment> */
