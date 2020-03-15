import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.Header}>
      <img
        src="https://zort.ru/media/uploads/images/artists/daft-punk_314.jpeg"
        alt="header"
      />
      <div className={classes.headerPlay}>
        <h3>Daft Punk</h3>
        <span>-</span>
        <p>New music</p>
      </div>
    </div>
  );
}

export default Header;
