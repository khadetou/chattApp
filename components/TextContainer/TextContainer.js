import Image from "next/image";
export default function TextContainer({ users }) {
  return (
    <div className="textContainer">
      <div>
        <h1>
          Realtime Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with NextJs and Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
        <h2>
          Try it out right now!
          <span role="img" aria-label="emoji">
            ⬅️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h1>Peaple currently chatting:</h1>
          <div className="activeContainer">
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <Image
                  alt="Online"
                  src="/icons/onlineIcon.png"
                  width={6}
                  height={6}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
