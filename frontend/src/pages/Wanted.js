import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WantedButtons from "../components/UI/WantedButtons";
import WantedFood from "../components/Food/WantedFood";
import classes from "./Wanted.module.css";
import Card from "../components/UI/Card";
import WantedList from "../components/Food/WantedList";
import HomeContext from "../store/home-context";
import useHttp from "../hooks/use-http";
import { addFood } from "../lib/api";

/* import { addFood } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner"; */

const Wanted = () => {
  const navigate = useNavigate();
  const [shownAddMenu, setShownAddMenu] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const ctx = useContext(HomeContext);
  const { sendRequest, status } = useHttp(addFood);

  // If the button is clicked, the state turns true
  const showAddHandler = () => {
    setShownAddMenu(true);
  };

  const closeAddHandler = () => {
    setShownAddMenu(false);
  };

  const addListHandler = () => {
    setShownAddMenu(false);
  };

  const itemDeleteHandler = (id) => {
    ctx.removeItem(id);
    setDeleted(true);
  };

  const addToHomeHandler = () => {
    console.log("ctx.items");
    console.log(ctx.items);
    for (var key in ctx.items) {
      let new_item = {item: ctx.items[key]};
      sendRequest(new_item);
    }
  };

  useEffect(() => {
      navigate("/wanted");
  }, [deleted, navigate]);

  useEffect(() => {
    if (status === "completed") {
      navigate("/athome");
    }
  }, [status, navigate]);

  // to send it via props to AddFood.js and not send each added item to the database
  const wanted = true;

  return (
    <React.Fragment>
      <div className={classes["main-image"]}>
        <div className={classes.div}>
          <h1 className={classes.h1}>MOST WANTED</h1>
          <h2 className={classes.h2}>
            Shopping list for all the items you need
          </h2>
        </div>
        <WantedButtons onClick={showAddHandler} onAdd={addToHomeHandler} />
        {/* props for the modal */}
        {shownAddMenu && (
          <WantedFood onWanted={wanted} onAdded={addListHandler} onClose={closeAddHandler} />
        )}
        <Card>
          <WantedList onDeleteItem={itemDeleteHandler} />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Wanted;
// WantedButtons
// WantedFood
// WantedList
