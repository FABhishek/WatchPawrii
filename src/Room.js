import React from "react";
import { useState, useEffect } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import ReactPlayer from "react-player";
<<<<<<< HEAD
import ChatBox from "./ChatBox";
||||||| a66287d
import ChatBox from "./ChatBox";
import IDS from "./Home.js"
=======
import io from "socket.io-client";
import Messages from "./messaging/messages.js";
import MessageInput from "./messaging/messageinput.js";
// import ChatBox from "./ChatBox";
>>>>>>> f6bd22745e715848f8c20412469eb655fb17d97d

function Room() {
  const [vidLink, getVidLink] = useState("");
  const [link, setLink] = useState(
    "https://www.youtube.com/watch?v=-iun6KPT4SM");
  const [playing, setPlaying] = useState(false);
  const displayLink = window.location.href;
  const newLink = displayLink.split("=")[1];
  const [socket, setSocket] = useState(null);

  const setTheLink = (e) => {
    e.preventDefault();
    setLink(vidLink);
    getVidLink('');
  };

<<<<<<< HEAD
  const [playing, setPlaying] = useState(false);

  const getLink = (event) => {
    event.preventDefault();
  };

  const displayLink = window.location.href;
  const newLink = displayLink.split('=')[1];

  // msg dissapper funtionality
  const sendMessage = useRef(null); // replacement of document.queryslecetor from vanilla.js
  const cleanMessage = (event) => {
    event.preventDefault();
    console.log(sendMessage.current.value);
    //const msg = sendMessage.current.value;
    // Socket.emit('chatMessage',msg); // emitting message using socket

    sendMessage.current.value = "";
    sendMessage.current.focus();
||||||| a66287d
  const [playing, setPlaying] = useState(false);

  const getLink = (event) => {
    event.preventDefault();
  };

  // msg dissapper funtionality
  const sendMessage = useRef(null); // replacement of document.queryslecetor from vanilla.js
  const cleanMessage = (event) => {
    event.preventDefault();
    console.log(sendMessage.current.value);
    //const msg = sendMessage.current.value;
    // Socket.emit('chatMessage',msg); // emitting message using socket

    sendMessage.current.value = "";
    sendMessage.current.focus();
=======
  const getLink = (e) => {
    e.preventDefault();
>>>>>>> f6bd22745e715848f8c20412469eb655fb17d97d
  };

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
  const preventReload = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="/">
          <h1>WatchPawri!!!!</h1>
        </a>
<<<<<<< HEAD
        <h2>{newLink}</h2>
||||||| a66287d
=======
        <h2> {newLink}</h2>
>>>>>>> f6bd22745e715848f8c20412469eb655fb17d97d
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
          <form className="chat-controls">
            <button onClick = {preventReload} className="controls chat">Chat</button>
            <button onClick = {preventReload} className="controls video">Audio</button>
            <button onClick = {preventReload} className="controls users">Users</button>
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
        </div>
      </div>
    </div>
  );
}

export default Room;
