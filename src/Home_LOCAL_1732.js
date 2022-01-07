import { useState,React} from "react"; 
import "./Home.css";
// import Modal from "../Modal/modal";
import Modal from "react-modal";
import "./Home.css"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

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
        <button onClick={toggleModal} type="button" className="bt Join">
         Join room
        </button>

        <button onClick = {event => window.location.href="/room"}
        type="button" className="bt Create">
        Create Room
        </button>
      </div>
   
    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={100}
      >
      <div className="Modal">
		      <span onClick={toggleModal} className="close-button">x</span>
		      <h1 className="mtext">Enter Room Code</h1>
		      <form className="formR">
            <input type="text" id="roomId" name="roomId" 
            placeholder="Room ID..." className="inTput"></input>
          </form><br></br>
          <div className="joinbutton">
          <button className="join-Button">Join</button>
          </div>
      </div>
      </Modal>
    </div>
  );
};

export default Home;
