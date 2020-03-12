import React from "react";
import classes from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
