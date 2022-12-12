// AtHomeList is the list of food items I have AtHome.
// I can add, update or delete items from it

import React, { useContext } from "react";
import HomeContext from "../../store/home-context";

import classes from "./AtHomeList.module.css";
import FoodItem from "./FoodItem";

const WantedList = (props) => {
  const ctx = useContext(HomeContext);

  // To access the name
  // const items = foodList[0].item.name;
  const deleteHandler = (id) => {
    props.onDeleteItem(id);
  };

/*   console.log("context");
  console.log(ctx);
  console.log(ctx.items);

  for (var key in ctx.items) {
    lista.push(ctx.items[key]);
    console.log(ctx.items[key]);
    }
  */
  return (
    <React.Fragment>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Units</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className={classes.foodli}>
          {ctx.items.map((obj) => (
            <FoodItem
              key={obj.key}
              id={obj.id}
              name={obj.name}
              amount={obj.amount}
              date={obj.date}
              units={obj.units}
              onDelete={deleteHandler.bind(null, obj.id)}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

// Wanted
export default WantedList;
// Food Item
