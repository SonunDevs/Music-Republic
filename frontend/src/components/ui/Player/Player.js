import React, { Component } from "react";
import classes from "./Player.module.css";
import play_btn_png from "../../../assets/icons/pause-button.png";
import prev_btn_png from "../../../assets/icons/prev-button.png";
import next_btn_png from "../../../assets/icons/next-button.png";
import option_btn_png from "../../../assets/icons/option-button.png";
import arrow_btn_png from "../../../assets/icons/arrow-button.png";
import volume_png from "../../../assets/icons/volume.png";
import repeate_png from "../../../assets/icons/repeate.png";
import random_png from "../../../assets/icons/random-playing.png";

class Player extends Component {
  state = {
    option_state: {
      open: false,
      state: "none"
    },
    slider_width: 1,
    volume_slider_width: "100%",
    slider_focus: false
  };

  option_drawer = () => {
    let open = !this.state.option_state.open;

    if (open) {
      this.setState({
        option_state: {
          open: true,
          state: "block"
        }
      });
    } else {
      this.setState({
        option_state: {
          open: false,
          state: "none"
        }
      });
    }
  };

  slider_click = (type, event) => {
    this.slider_check(type, event);
    this.setState({
      slider_focus: true
    });
  };

  slider_cursor_move = (type, event) => {
    if (this.state.slider_focus) {
      this.slider_check(type, event);
    }
  };

  slider_not_focus = () => {
    this.setState({
      slider_focus: false
    });
  };

  slider_check = (type, event) => {
    let size = event.target.getBoundingClientRect();

    if (size.x > event.clientX) {
      this.setWidth(type, 0);
    } else if (size.x + size.width < event.clientX) {
      this.setWidth(type, size.width);
    } else {
      this.setWidth(type, event.clientX - size.x);
    }
  };

  setWidth = (type, value) => {
    if (type === "track_slider") {
      this.setState({
        slider_width: value
      });
    } else if (type === "volume_slider") {
      this.setState({
        volume_slider_width: value
      });
    }
  };

  render() {
    return (
      <div className={classes.Player}>
        <div className={classes.slider_wrapper}>
          <span className={classes.slider_time}>0:00</span>
          <div
            className={classes.slider}
            style={{ width: this.state.slider_width + "px" }}
          ></div>
          <span className={classes.slider_time}>0:00</span>
          <div
            className={classes.slider_box}
            onMouseDown={event => this.slider_click("track_slider", event)}
            onMouseMove={event =>
              this.slider_cursor_move("track_slider", event)
            }
            onMouseUp={event => this.slider_not_focus()}
            onMouseLeave={event => this.slider_not_focus()}
          ></div>
        </div>
        <div className={classes.player__controls_container}>
          <div className={classes.controls}>
            <button className={classes.option_btn} onClick={this.option_drawer}>
              <img src={option_btn_png} alt="option button" />
            </button>
            <div>
              <button className={classes.prev_btn}>
                <img src={prev_btn_png} alt="prev button" />
              </button>
              <button className={classes.play_btn}>
                <img src={play_btn_png} alt="play and pause buttons" />
              </button>
              <button className={classes.next_btn}>
                <img src={next_btn_png} alt="next button" />
              </button>
            </div>
            <button className={classes.opener_btn}>
              <img src={arrow_btn_png} alt="arrow button" />
            </button>
          </div>
          <div
            className={classes.options}
            style={{ display: this.state.option_state.state }}
          >
            <div className={classes.volume_box}>
              <button className={classes.volume}>
                <img src={volume_png} alt="volume button" />
              </button>
              <div
                className={classes.volume_slider_wrapper}
                onMouseDown={event => this.slider_click("volume_slider", event)}
                onMouseMove={event =>
                  this.slider_cursor_move("volume_slider", event)
                }
                onMouseUp={event => this.slider_not_focus()}
                onMouseLeave={event => this.slider_not_focus()}
              >
                <div
                  className={classes.volume_slider}
                  style={{ width: this.state.volume_slider_width + "px" }}
                ></div>
              </div>
            </div>
            <div className={classes.options_playing}>
              <button className={classes.repeate_track_btn}>
                <img src={repeate_png} alt="repeate button" />
              </button>
              <button className={classes.random_playing_btn}>
                <img src={random_png} alt="random button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
