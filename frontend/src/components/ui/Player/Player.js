import React from "react";
import classes from "./Player.module.css";
import play_btn_png from "../../../assets/icons/pause-button.png";
import prev_btn_png from "../../../assets/icons/prev-button.png";
import next_btn_png from "../../../assets/icons/next-button.png";
import option_btn_png from "../../../assets/icons/option-button.png";
import arrow_btn_png from "../../../assets/icons/arrow-button.png";

function Player(props) {
  return (
    <div className={classes.Player}>
      <div className={classes.slider_wrapper}>
        <span className={classes.slider_time}>0:00</span>
        <div className={classes.slider}></div>
        <span className={classes.slider_time}>0:00</span>
      </div>
      <div className={classes.player__controls_container}>
        <div className={classes.controls}>
          <button className={classes.option_btn}>
            <img src={option_btn_png} alt="option button" />
          </button>
          <button className={classes.prev_btn}>
            <img src={prev_btn_png} alt="prev button" />
          </button>
          <button className={classes.play_btn}>
            <img src={play_btn_png} alt="play and pause buttons" />
          </button>
          <button className={classes.next_btn}>
            <img src={next_btn_png} alt="next button" />
          </button>
          <button className={classes.opener_btn}>
            <img src={arrow_btn_png} alt="arrow button" />
          </button>
        </div>
        <div className={classes.options}>
          <div className={classes.volume_box}>
            <div>
              <button className={classes.volume}></button>
              <div className={classes.volume_slider_wrapper}>
                <div className={classes.volume_slider}></div>
              </div>
            </div>
            <div>
              <button className={classes.repeate_track_btn}></button>
              <button className={classes.random_playing_btn}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
