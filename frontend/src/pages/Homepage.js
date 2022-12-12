import React from "react";

import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <div className={classes["main-image"]}>
        <div className={classes.div}>
          <h1 className={classes.h1}>
            HOME PAGE OF YOUR SHOPPING LIST MANAGER
          </h1>
          <p className={classes.p}>
            Choose between the options. See what you already have{" "}
            <strong>AT HOME</strong>, <br />
            make a whishlist in the <strong>WANTED</strong> section or view the{" "}
            <strong>HISTORY</strong> of your shopping.
          </p>
          {/* Barrita negra separadora */}

          <div className={classes.div3}></div>

          <section className={classes.wrapper}>
            <div className={classes.wrapper2}>
              <h2 className={classes.h2}>AT HOME</h2>
              <p className={classes.p2}>
                You will find a list, with all the products that you've already 
                at home. New items can be added, existing items updated and
                every consumed item deleted.
              </p>
              {/*               <Link className={classes.link} to="/athome">
                Learn More
              </Link> */}
            </div>

            <div className={classes.wrapper3}>
              <h2 className={classes.h3}>WANTED</h2>
              <p className={classes.p3}>
                Basically, your shopping list. <br /> Build a list with every
                item that should be bought next time you go to the supermarket. <br/> 
                Once you buy them, pass them to "At Home" section with just
                a click.
              </p>
              {/*               <a className={classes.a} href="http://localhost:3000">
                Learn More
              </a> */}
            </div>

            <div className={classes.wrapper4}>
              <h2 className={classes.h4}>HISTORY</h2>
              <p className={classes.p4}>
                A list with all your products and transactions. Every bought,
                updated or deleted item will be here.
                <br /> <br />
                HOMEALS v2 in progress
              </p>
              {/*               <a className={classes.a} href="http://localhost:3000">
                Learn More
              </a> */}
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
