import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";
import "./Room.css"
// no dotenv
const socket = io.connect("http://localhost:5000");
const userName = nanoid(8);

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        {chat.map((payload, index) => {
          return (
            <div className="chat-main">
              <div className="chat-messages">
                <p key={index}>
                  {payload.message}: <span>id: {payload.userName}</span>
                </p>
              </div>
            </div>
          );
        })}

        <form onSubmit={sendChat}>
          <input
            autocomplete="off"
            autoFocus
            type="text"
            name="chat"
            placeholder="send text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
