import React, { useEffect, useState } from "react";
import "./messages.css";

function Messages({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messageListener = (message) => {
      // setMessages((prevMessages) => {
      //   const newMessages = { ...prevMessages };
      //   newMessages[message.id] = message;
      console.log("messageListener", message);
      //   return newMessages;
      // });
      setMessages((prevMessages) => [...prevMessages, message]);
      // setMessages({ message });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on("message", messageListener);
    // console.log("messageListener", messageListener);
    socket.on("deleteMessage", deleteMessageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("message", messageListener);
      socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);
  console.log("messages", messages);
  return (
    <div className="message-list">
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div
            key={message.id}
            className="message-container d-flex flex-colum"
            // title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            <span className="user">{message.username}:</span>
            <span className="message">{message.text}</span>
            <span className="date">{new Date().toLocaleTimeString()}</span>
          </div>
        ))}
    </div>
  );
}

export default Messages;
