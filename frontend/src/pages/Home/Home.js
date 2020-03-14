import React from "react";
import classes from "./Home.module.css";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import Nav from "../../components/ui/Nav/Nav";
import Drawer from "../../components/Drawer/Drawer";

function Home(props) {
  return (
    <div className={classes.Home}>
      <Nav />
      <Header />
      <Drawer />
      <div className={classes.content}></div>
      <Footer />
    </div>
  );
}

export default Home;
