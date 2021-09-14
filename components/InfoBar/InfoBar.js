import Image from "next/image";
import Link from "next/link";

export default function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <Image
          className="onlineIcon"
          src="/icons/onlineIcon.png"
          width={6}
          height={6}
          alt="online icon"
        />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <Link href="/">
          <a>
            <Image
              className="onlineIcon"
              src="/icons/closeIcon.png"
              width={6}
              height={6}
              alt="online icon"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
