import React from "react";
import classes from "./Drawer.module.css";
import Player from "../ui/Player/Player";

function Drawer(props) {
  return (
    <div className={classes.Drawer}>
      <Player />
    </div>
  );
}

export default Drawer;
