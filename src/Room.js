import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import ReactPlayer from "react-player";
// import io from "socket.io-client";
import Messages from "./messaging/messages.js";
import MessageInput from "./messaging/messageinput.js";
// import ChatBox from "./ChatBox";

import { io } from "socket.io-client";

function Room() {
  const [vidLink, getVidLink] = useState("");
  const [Link, setLink] = useState("");
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const displayLink = window.location.href;
  const newLink = displayLink.split("=/")[1];
  const room = window.location.pathname.substring(7);

  const socket = io("http://localhost:8000");
  useEffect(() => {
    socket.emit("joinRoom", { room });
  });

  socket.on("SYNC", (data) => {
    console.log("sync 43", data);
    setLink(data.videoId);
  });
  socket.on("VIDEO_LOAD", (data) => {
    console.log(" 35 vid load", data);
    setLink(data.videoId);
  });

  socket.on("VIDEO_PAUSE", (data) => {
    console.log("vid pause", data);
    player.current.seekTo(data.currTime);
  });
  socket.on("VIDEO_PLAY", (data) => {
    console.log("vid play", data);
    setPlaying(true);
    // player.current.play(data.currTime);
  });

  const handlePause = () => {
    console.log("Pause:");
    socket.emit("VIDEO_PAUSE", {
      event: "pause",
      currTime: player.current.getCurrentTime(),
    });
  };
  const setTheLink = (e) => {
    e.preventDefault();
    console.log("vidLink:", vidLink);
    socket.emit("VIDEO_LOAD", { videoId: vidLink });
  };

  const handlePlay = () => {
    console.log("playing:");
    socket.emit("VIDEO_PLAY", {
      event: "play",
      currTime: player.current.getCurrentTime(),
    });
  };
  const preventReload = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="/">
          <h1>WatchPawri!!!!</h1>
        </a>
        <h2> {newLink}</h2>
        <a className="textColor" href="/">
          <FontAwesome className="fas fa-sign-out alt" name="sign out" />
          Exit
        </a>
      </nav>
      <div className="content">
        <div className="video-container">
          <form
            // onSubmit={getLink}
            className="search-form"
          >
            <input
              autoFocus
              type="text"
              value={vidLink}
              onChange={(e) => getVidLink(e.target.value)}
              placeholder="Enter any valid URL ..."
            />
            <button className="ldbtn" type="submit" onClick={setTheLink}>
              Load
            </button>
          </form>
          <div id="player">
            <ReactPlayer
              url={Link}
              ref={player}
              width="100%"
              height="100%"
              onPause={handlePause}
              onPlay={handlePlay}
              muted={true}
              controls={true}
              playing={playing}
            />
          </div>
          {/* <button className="play-pause" size="small" id="playbtn">
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
          </button> */}
        </div>
        <div className="sidebar">
          <form className="chat-controls">
            <button onClick={preventReload} className="controls chat">
              Chat
            </button>
            <button onClick={preventReload} className="controls video">
              Audio
            </button>
            <button onClick={preventReload} className="controls users">
              Users
            </button>
          </form>

          <div className="Side-bar">
            {/* {socket ? (
              <div className="chat-container">
                <Messages socket={socket} />
                <MessageInput socket={socket} />
              </div>
            ) : (
              <div>Connecting....</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
