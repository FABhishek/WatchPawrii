import React from "react";
import { useState, useRef } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import ReactPlayer from "react-player";
import { Socket } from "socket.io-client";

function Room() {
  const [vidLink, getVidLink] = useState("");
  const [link, setLink] = useState("");

  const setTheLink = (e) => {
    setLink(vidLink);
  };

  const [playing, setPlaying] = useState(false);

  const getLink = (event) => {
    event.preventDefault();
  };

  // msg dissapper funtionality
  const sendMessage = useRef(null); // replacement of document.queryslecetor from vanilla.js
  const cleanMessage = () => {
    //const msg = sendMessage.current.value;
    // Socket.emit('chatMessage',msg); // emitting message using socket

    sendMessage.current.value = "";
    sendMessage.current.focus();
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
              autoFocus
              type="text"
              value={vidLink}
              onChange={(e) => getVidLink(e.target.value)}
              placeholder="Enter any valid URL ..."
            />
            <button class="ldbtn" onClick={setTheLink}>
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
            <button className="controls chat">chat</button>
            <button className="controls video">video</button>
            <button className="controls users">users</button>
          </div>

          <div className="chat-container">
            <div className="chat-main">
              <div className="chat-messages"></div>
            </div>
            <div className="chat-form-container">
              <form id="chat-form">
                <input
                  type="text"
                  // id="msg"
                  placeholder="Enter the Message"
                  autocomplete="off"
                  required
                  ref={sendMessage}
                />
                <button onClick={cleanMessage} type="button" class="btn-snd">
                  <FontAwesome className="fa fa-send" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;