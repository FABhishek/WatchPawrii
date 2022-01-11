import React from "react";
import { useState } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { IconButton } from "@material-ui/core";
import PauseIcon from "@material-ui/icons/Pause";

function Room() {
  const [link, setLink] = useState("");
  const [playing, setPlaying] = useState(false);

  const getLink = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="/">
          <h1>WatchPawri!!!!</h1>
        </a>
        <a className="textColor" href="/">
          <i class="fa-solid fa-wrench-simple"></i>Leave Room
        </a>
      </nav>
      <div className="content">
        <div className="video-container">
          <form onSubmit={getLink} className="search-form">
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter any URL"
            />
            <button type="submit" class="ldbtn">
              Load
            </button>
          </form>
          <div id="player">
            <ReactPlayer
              url={link}
              width="100%"
              height="100%"
              controls={false}
              playing={playing}
            />
          </div>
          <IconButton className="play-pause" size="small">
          {playing ? (
            <PlayArrowIcon onClick={() => setPlaying(false)} />
          ) : (
            <PauseIcon onClick={() => setPlaying(true)} />
          )}
        </IconButton>
        </div>
        <div className="sidebar">
          <div className="chat-controls">
            <button className="controls chat">chat</button>
            <button className="controls video">video</button>
            <button className="controls users">users</button>
          </div>
          <div className="username-form"></div>
        </div>
      </div>
    </div>
  );
}

export default Room;
