import React from "react";
import { NavLink, Link } from "react-router-dom";

import classes from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
      <Link to="/">
          <div className={classes.main}>HOMEALS</div>
        </Link>
        <nav>
          <ul>
            <li>
            <NavLink className={ (navData) => navData.isActive ? classes.active : ''} to="/athome">At Home</NavLink>
            </li>
            <li>
            <NavLink className={ (navData) => navData.isActive ? classes.active : ''} to="/wanted">Wanted</NavLink>
            </li>
            <li>
            <NavLink className={ (navData) => navData.isActive ? classes.active : ''} to="/history">History</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;