import Join from "@/components/Join/Join";
import io from "socket.io-client";
import { useEffect, useState } from "react";
export default function Home() {
  const [val, setVal] = useState("");
  let socket;
  useEffect(() => {
    socket = io();
    socket.on("mess", (data) => {
      setVal(data.message);
      console.log(data);
    });
  }, [socket]);
  return (
    <div>
      {val}
      <Join />
    </div>
  );
}
