export default function Input({ setMessage, sendMessage, message }) {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Type a message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}
