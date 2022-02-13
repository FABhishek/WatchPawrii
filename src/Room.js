import React from "react";
import { useState, useEffect,useRef } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import ReactPlayer from "react-player";
import io from "socket.io-client";
import Messages from "./messaging/messages.js";
import MessageInput from "./messaging/messageinput.js";
import AudioChat from "./messaging/audio.js"

function Room() {

  const [vidLink, getVidLink] = useState("");
  console.log(vidLink);
  const [link, setLink] = useState("");
  const displayLink = window.location.href;
  const room = window.location.pathname.substring(7);
  const [played, setPlayed] = useState(0);
  const socket = io("http://localhost:8000");
  const player = useRef(null);

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
    // ReactPlayer.seekTo(data.currTime);
    console.log("vid pause", data);
    player.current.seekTo(data.currTime);
  });
  // socket.on("VIDEO_PLAY", (data) => {
  //   console.log("vid play", data);
  //   ReactPlayer.play();
  // });
  const setTheLink = (e) => {
    e.preventDefault();
    console.log("vidLink:", vidLink);
    socket.emit("VIDEO_LOAD", { videoId: vidLink });
  };

  const handlePause = () => {
    console.log("Pause:", played);

  // const setSpeed = () => 
  // {
  //   playbackSpeed += 0.25;
  //   playbackSpeed <= 2 ?
  //   setPlaybackSpeed(playbackSpeed):
  //   setPlaybackSpeed(playbackSpeed = 1)
  // }

    socket.emit("VIDEO_PAUSE", {
      event: "pause",
      currTime: played
    });
  };

  const handlePlay = (played) => {
    console.log("playing:", played);
    socket.emit("VIDEO_PLAY", {
      event: "play",
      currTime: played
    });
  };

  const preventReload = (e) => {
    e.preventDefault();
  };

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
              url={link}
              width="100%"
              height="100%"
              controls = {true}
              playing = {false}
              onProgress={(progress) => {
                setPlayed(progress.playedSeconds);
              }}
              onPause = {handlePause}
              onPlay = {handlePlay}
            />
          </div>
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


