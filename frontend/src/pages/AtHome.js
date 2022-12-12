// AtHome is the page where i can see all the products I have at home.
// A table will be displayed with several items
// We'll treat the "table" that the users see, as a list of objects with some information

import React, { useState, useEffect } from "react";

import { deleteFood, getAllItems } from "../lib/api";

import classes from "./AtHome.module.css";
import Card from "../components/UI/Card";
import AtHomeList from "../components/Food/AtHomeList";
import AddFood from "../components/Food/AddFood";
import HomeButtons from "../components/UI/HomeButtons";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
/* import HomeProvider from "../store/HomeProvider"; */

const AtHome = () => {
  // We manage the state of the Add menu.
  const [shownAddMenu, setShownAddMenu] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [submited, setSubmited] = useState(false);

  // If the button is clicked, the state turns true
  const showAddHandler = () => {
    setShownAddMenu(true);
  };

  const closeAddHandler = () => {
    setShownAddMenu(false);
  };

  const itemDeleteHandler = (id) => {
    deleteFood(id);
    setDeleted(true);
    sendRequest();
  };

  const submitedHandler = () => {
    setSubmited(true);
    setShownAddMenu(false);
    sendRequest();
  };

  const { sendRequest, status, data, error } = useHttp(getAllItems, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, deleted, submited]);


  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

/*   let renderData;
  if (status === 'completed' && data && data.length > 0) {
    renderData = <AtHomeList items={data} />;
  }

  if (
    status === 'completed' &&
    (!data || data.length === 0)
  ) {
    renderData = <p className='centered'>No data was added yet!</p>;
  }
 */


  return (
    <React.Fragment>
      <div className={classes["main-image"]}>
        <div className={classes.div}>
          <h1 className={classes.h1}>What's at home</h1>
        </div>
        <HomeButtons onClick={showAddHandler} />
        {/* props for the modal */}
        {shownAddMenu && <AddFood onSubmited={submitedHandler} onClose={closeAddHandler} />}
        <Card>
          <AtHomeList items={data} onDeleteItem={itemDeleteHandler}/>
        </Card>
      </div>
    </React.Fragment>
  );
};

// App
export default AtHome;
// AtHomeList
