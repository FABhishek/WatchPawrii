import React from "react";

const SocketConnection = () => {
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [botName, setBotName] = useState("Bot");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [videoLinkInput, setVideoLinkInput] = useState("");

  return <div></div>;
};

export default SocketConnection;
