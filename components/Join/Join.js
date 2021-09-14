import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!room || !name) {
      return toast.error("Enter your credentials !");
    }
    if (name && room) {
      router.push(`/chat?name=${name}&room=${room}`);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Name"
            className="joinInput"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className="joinInput"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>

        <button
          onClick={onSubmitHandler}
          className="button mt-20"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
