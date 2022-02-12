import { useState } from "react";
import "./Home.css";
import Modal from "react-modal";
import "./Home.css";
import { v4 as uuid } from "uuid";



import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomId, setroomId] = useState("");

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const getRoomID = (event) => {
    event.preventDefault();
  };
  // const socket = io("http://localhost:8000");

  // socket.on("connect", () => {
  //   console.log("Socket connected");
  // });

  const navigate = useNavigate();
  function joinRoom() {
    axios
      .get("http://localhost:5000/join", {
        params: {
          roomId: roomId,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("room=/" + `${res.data}`);
      });
  }

  function createRoom(e) {
    axios.get("http://localhost:5000/room").then((res) => {
      // console.log(res.data);
      navigate("room=/" + `${res.data.room}`);
    });
  }

  return (
    <div className="App">
      <nav className="navbar NavColor">
        <a className="textColor" href="/">
          <h1>WatchPawri!!!!</h1>
        </a>
      </nav>
      <div className="AppMid">
        <h1>
          Binge Together<br></br>😎
        </h1>
      </div>
      <div className="Buttons">
        <button onClick={toggleModal} type="button" className="bt Join">
          Join room
        </button>

        <button onClick={createRoom} type="button" className="bt Create">
          Create Room
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={50}
      >
        <div className="Modal">
          <span onClick={toggleModal} className="close-button">
            X
          </span>
          <h1 className="mtext">Enter Room Code</h1>
          <form className="formR" onSubmit={getRoomID}>
            <input
              autoComplete="off"
              type="text"
              id="roomId"
              name="roomId"
              placeholder="Room ID..."
              className="inTput"
              onChange={(e) => setroomId(e.target.value)}
            />
            <button type="submit" className="join-Button" onClick={joinRoom}>
              Join
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
