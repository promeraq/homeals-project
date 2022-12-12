import React, { useReducer } from "react";

import HomeContext from "./home-context";

// initial state defined for functionReducer
const initHomeState = [];

// const functionReducer = (actState, action) ⇒ {return newState}
// The action we receive is the object of the dispatchFunction
const homeReducer = (actualState, action) => {
  if (action.type === "ADD_ITEM") {
    // findIndex() looks for an element in an array and gives us the index of it
    // so the function looks through the items array and gives us the index of the item
   /*  const itemIndex = actualState.findIndex(
      (item) => (item.id === action.item.id)
    );

    // Let's get the existing item. If it doesn't exist it will be equal to null
    const existingItem = actualState[itemIndex];
    let newItems;

    if (existingItem) {
      // Let's update the existing item
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      // New array of items to add the updated item
      newItems = [...actualState];
      newItems[itemIndex] = updatedItem;
    } else { */
      // If item doesn't exist yet
      let newItems = actualState.concat(action.item);
 /*    } */
    console.log("newItems");
    console.log(newItems);
    return newItems;
    
  }

  /* if (action.type === "UPDATE_ITEM") {
    // If we have more than one item, we remove one.
    // If we have just one, we delete the entire item from the cart
    const itemIndex = actualState.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = actualState[itemIndex];
    let newItems;

    const updatedItem = {
      ...existingItem,
      amount: action.amount,
    };

    newItems = [...actualState];
    newItems[itemIndex] = updatedItem;

    return {
      items: newItems,
    };
  } */

  if (action.type === "REMOVE_ITEM") {
    let newItems = actualState.filter((item) => action.id !== item.id);
    return newItems;
    
  }



  return initHomeState;
};

const HomeProvider = (props) => {
  // const [state, dispatchFunction] = useReducer(functionReducer, initState, initFunction);
  const [homeState, dispatchHomeFunction] = useReducer(
    homeReducer,
    initHomeState
  );

  // Whenever the "add button" is clicked, this function is called and we get the item that should be added to home list.
  // If we already have the item, we will update the list. If don't have it, we add a new item.
  const addItemHandler = (item) => {
    dispatchHomeFunction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchHomeFunction({ type: "REMOVE_ITEM", id: id });
  };

  /*   const updateItemHandler = (id, amount) => {
    dispatchHomeFunction({ type: "UPDATE_ITEM", id: id, amount: amount });
  }; */

  // This will be the actual context object with the data to be passed.
  const homeContext = {
    items: homeState,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    /*     updateItem: updateItemHandler, */
  };

  return (
    <HomeContext.Provider value={homeContext}>
      {props.children}
    </HomeContext.Provider>
  );
};

// App
export default HomeProvider;
