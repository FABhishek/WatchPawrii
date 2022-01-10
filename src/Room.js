import React from "react";
import { useState } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import ReactPlayer from "react-player";

function Room() {
  const [vidLink, getVidLink] = useState("");
  const [link, setLink] = useState("");

  const setTheLink = ({ target }) => {
    setLink(vidLink);
  };

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
          <FontAwesome className="fas fa-sign-out alt" name="sign out" />
          Exit
        </a>
      </nav>
      <div className="content">
        <div className="video-container">
          <form onSubmit={getLink} className="search-form">
            <input
              type="text"
              value={vidLink}
              onChange={(e) => getVidLink(e.target.value)}
              placeholder="Enter any URL"
            />
            <button type="submit" class="ldbtn" onClick={setTheLink}>
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
          {/* <IconButton className="play-pause" size="small">
          {playing ? (
            <PlayArrowIcon onClick={() => setPlaying(false)} />
          ) : (
            <PauseIcon onClick={() => setPlaying(true)} />
          )}
        </IconButton>  */}
          <button className="play-pause" size="small" id="playbtn">
            {playing ? (
              <FontAwesome
                className="fa-solid fa-circle-play"
                name="play"
                onClick={() => setPlaying(false)}
              />
            ) : (
              <FontAwesome
                className="fa-solid fa-circle-pause"
                name="pause"
                onClick={() => setPlaying(true)}
              />
            )}
          </button>
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
