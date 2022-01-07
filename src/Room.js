import React from "react";
import "./Room.css";
import "./Home.css";

function Room() {
  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="/">
          <h1>WatchPawri!!!!</h1>
        </a>
      </nav>
      <div className="content">
        <div className="video-container">
          <form className="search-form">
            <input
              type="text"
              name="youtube_url"
              placeholder="Enter YouTube URL"
              required
            />
            <button type="submit" class="ldbtn">
              Load Video
            </button>
          </form>

          <div id="player"></div>
        </div>

        <div className="sidebar">
          <div className="username-form"></div>
        </div>
      </div>
    </div>
  );
}

export default Room;
