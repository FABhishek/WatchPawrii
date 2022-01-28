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
  const [link, setLink] = useState();
  // "https://www.youtube.com/watch?v=-iun6KPT4SM");
  const [playing, setPlaying] = useState(false);
  const displayLink = window.location.href;
  const newLink = displayLink.split("=/")[1];
  // const [socket, setSocket] = useState(null);
  const room = window.location.pathname.substring(7);
  console.log(room);
  const socket = io("http://localhost:8000");
  socket.on("connect", () => {
    console.log("Socket connected");

    socket.emit("joinRoom", { room });
    socket.on("SYNC", (data) => {
      setLink = data;
    });
  });

  const setTheLink = (e) => {
    e.preventDefault();
    setLink(vidLink);
    getVidLink("");
  };

  const getLink = (e) => {
    e.preventDefault();
  };

  const preventReload = (e) => {
    e.preventDefault();
  }
  
  const [sections, setSections] = useState('chat')

  useEffect((e) => {

    console.log("render")
  }, [sections])




  

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
          <form onSubmit={getLink} className="search-form">
            <input
              autoFocus
              type="text"
              value={vidLink}
              onChange={(e) => getVidLink(e.target.value)}
              placeholder="Enter any valid URL ..."
            />
            <button className="ldbtn" onClick={setTheLink}>
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
            <button onClick = {() => setSections('chat')} className="controls chat">Chat</button>
            <button onClick = {() => setSections('audio')} className="controls audio">Audio</button>
            <button onClick = {() => setSections('users')} className="controls users">Users</button>
          </div>
          <h1>{sections}</h1>
          <div onClick = { () => setChat()}className="Side-bar">
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
            {socket ? (
              <div className="chat-container">
                <Messages socket={socket} />
                <MessageInput socket={socket} />
              </div>
            ) : (
              <div>Connecting....</div>
            )}
          </div>
          <div onClick = { () => setAudio}className="side-bar-audio">
              <AudioChat/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
