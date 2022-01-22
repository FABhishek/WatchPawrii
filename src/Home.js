import { useState } from "react";
import "./Home.css";
import Modal from "react-modal";
import "./Home.css";
import { v4 as uuid } from "uuid";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomId, setroomId] = useState("");

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const getRoomID = (event) => {
    event.preventDefault();
  };

  const room_id = uuid().slice(0, 18);

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

        <button
          onClick={(event) => (window.location.href = "/room")}
          type="button"
          className="bt Create"
        >
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
            <button
              type="submit"
              className="join-Button"
              onClick={(event) => (window.location.href = "/join")}
            >
              Join
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
