import React from "react";
import { useState, useEffect } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import ReactPlayer from "react-player";
// import io from "socket.io-client";
import Messages from "./messaging/messages.js";
import MessageInput from "./messaging/messageinput.js";
import AudioChat from "./messaging/audio.js";
// import ChatBox from "./ChatBox";

import { io } from "socket.io-client";

function Room() {
  const [vidLink, getVidLink] = useState("");
  const [Link, setLink] = useState();
  // "https://www.youtube.com/watch?v=-iun6KPT4SM");
  const [playing, setPlaying] = useState(false);
  const displayLink = window.location.href;
  const newLink = displayLink.split("=/")[1];
  // const [socket, setSocket] = useState(null);
  const room = window.location.pathname.substring(7);
  // console.log("rooms24 :", room);
  const socket = io("http://localhost:8000");
  useEffect(() => {
    console.log("Socket connected");

    socket.emit("joinRoom", { room });
  }, []);

  socket.on("VIDEO_LOAD", (data) => {
    console.log(" 35 vid load", data);
    setLink(data.videoId);
  });
  socket.on("SYNC", (data) => {
    console.log("sync 43", data);
    setLink(data.videoId);
  });
  const setTheLink = (e) => {
    e.preventDefault();
    console.log("vidLink:", vidLink);
    socket.emit("joinRoom", { room });
    socket.emit("VIDEO_LOAD", { videoId: vidLink });

    // getVidLink("");
  };

  // const getLink = (e) => {
  //   e.preventDefault();
  //   const id = getYouTubeId(vidLink);
  //   socket.emit("VIDEO_LOAD", { event: "load", videoId: id });
  // };

  const preventReload = (e) => {
    e.preventDefault();
  }
  
  // side-bar functions

  const [chatVisible, setChatVisible] = useState(true);
  const [audioVisible, setAudioVisible] = useState(false);
  const [userVisible, setUserVisible] = useState(false);

  function makeChatVisible() {
    setChatVisible(true);
    setAudioVisible(false);
    setUserVisible(false);
  }

  function makeAudioVisible() {
    setChatVisible(false);
    setAudioVisible(true);
    setUserVisible(false);
  }

  function makeUserVisible() {
    setChatVisible(false);
    setAudioVisible(false);
    setUserVisible(true);
  }


  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="/">
          <h1>WatchPawri!!!!</h1>
        </a>
        <h2> {room}</h2>
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
              width="100%"
              height="100%"
              controls={false}
              playing={playing}
            />
          </div>
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
            <button onClick={makeChatVisible} className="controls chat">
              Chat
            </button>
            <button onClick={makeAudioVisible} className="controls video">
              Audio
            </button>
            <button onClick={makeUserVisible} className="controls users">
              Users
            </button>
          </div>

          {chatVisible && <div className="Side-bar">
            {socket ? (
              <div className="chat-container">
                <Messages socket={socket} />
                <MessageInput socket={socket} />
              </div>
            ) : (
              <div>Connecting....</div>
            )}
          </div>}
          {audioVisible && <div className="side-bar-audio">
            <AudioChat/>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Room;
