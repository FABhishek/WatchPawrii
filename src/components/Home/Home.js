import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="#">
          <h1>WatchPawri!!!!</h1>
        </a>
      </nav>
      <div className="AppMid">
        <h1>
          Binge Together<br></br>😎
        </h1>
      </div>
      <div className="Buttons">
        <button type="button" className="bt Join">
          <a href="/modal"> Join room</a>
        </button>

        <button type="button" className="bt Create">
          <a href="/modal"> Create Room</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
