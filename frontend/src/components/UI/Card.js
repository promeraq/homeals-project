import React from 'react';
import classes from './Card.module.css'

// The card wrapper style is always the same. Return a div with props.children and a css class
const Card = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
};

export default Card;