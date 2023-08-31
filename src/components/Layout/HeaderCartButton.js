import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button}>
        <spam className={classes.icon}>
          <CartIcon />
        </spam>
        <spam>Your Cart</spam>
        <spam className={classes.badge}>3</spam>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
