export default function Input({ setMessage, sendMessage, message }) {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Type a message"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButto" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}
