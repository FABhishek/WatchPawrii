import React from "react";
import { useState } from "react";
import "./Room.css";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import ReactPlayer from "react-player";

function Room() {
  const [link, setLink] = useState("");
  const [playing, setPlaying, PauseIcon] = useState(true)

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
            <ReactPlayer url={link}
             width='100%'
             height='100%' 
            //  style={{display:"none"}}
             controls={false}
             playing={playing}
            //  wrapper={"audio"}
            //  progressInterval={200}
            //  config={{
            //    file: {
            //      attributes: {preload: "auto"},
            //      forceAudio:true,
            //    },
            //  }}
         />
         <button size="small">
             {playing? (
               <button onClick={() => setPlaying(false)}/>
             ) : (
               <button onClick={() => setPlaying(true)}/>
             )}
         </button>
          </div>
        </div>
        <div className="sidebar">
          <div className="username-form"></div>
        </div>
      </div>
    </div>
  );
}

export default Room;
