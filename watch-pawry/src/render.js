// import { Modal, Button } from "react-bootstrap";
import React from "react";
// import { useState } from "react";
import styled from "styled-components";

const frontPage = (
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
        <button type="button" className="btn Join">
          Join Room
        </button>

        <button  type="button" className="btn Create">
          Create Room
        </button>
      </div>
    </div>
);

const lobbyArea = (<div></div>);

export { frontPage };
