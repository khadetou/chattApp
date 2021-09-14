import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";
import { toast } from "react-toastify";
import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/messsages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

let socket;
export default function Chat() {
  const router = useRouter();
  const { query } = router;
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = query;
    socket = io();

    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        toast.error(error);
      }
    });
  }, []);

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
      setMessages((data) => [...messages, data]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
}
