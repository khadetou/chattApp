import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./message/message";

export default function Messsages({ messages, name }) {
  return (
    <div className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
}
