import React from "react";
import { useEventListener } from "./hooks";
import "./styles.css";
import sticker1 from "./stickers/sticker1.png";
import sticker2 from "./stickers/sticker2.png";
import sticker3 from "./stickers/sticker3.png";
import sticker4 from "./stickers/sticker4.png";
import sticker5 from "./stickers/sticker5.png";
import sticker6 from "./stickers/sticker6.png";
import sticker7 from "./stickers/sticker7.png";
import sticker8 from "./stickers/sticker8.png";
import sticker9 from "./stickers/sticker9.png";
import sticker10 from "./stickers/sticker10.png";
import ticket1 from "./thumbnails/ticket1.png";
import ticket2 from "./thumbnails/ticket2.png";
import ticket3 from "./thumbnails/ticket3.png";

const stickers = [
  sticker1,
  sticker2,
  sticker3,
  sticker4,
  sticker5,
  sticker6,
  sticker7,
  sticker8,
  sticker9,
  sticker10
];

setTimeout(() => {
  console.clear();
  console.log(
    "Normally, you'd see a link to a company's careers page or something to show " +
      "that they're cool and hip. Unfortunately, I'm only a mere mortal, " +
      "and so all I have to offer you is this crisp high-five ✋"
  );
}, 5000);

let uniqueStickers = [...stickers];

stickers.forEach((sticker) => {
  new Image().src = sticker;
});

const getRandomSticker = () => {
  if (!uniqueStickers.length) {
    uniqueStickers = [...stickers];
  }

  const randomIndex = Math.floor(Math.random() * uniqueStickers.length);
  const sticker = uniqueStickers.splice(randomIndex, 1);

  return sticker;
};

export default function App() {
  const [stickers, setStickers] = React.useState([]);

  const clickHandler = React.useCallback(({ clientX, clientY }) => {
    const randomNumber = Math.random();

    if (randomNumber > 0.9) {
    }

    const sticker = getRandomSticker();
    const randomRotation = Math.random() * 360;

    setStickers((stickers) => [
      ...stickers,
      <img
        src={sticker}
        alt="sticker"
        style={{
          width: 100,
          position: "absolute",
          top: clientY,
          left: clientX,
          transform: `translate(-50%, -50%) rotate(${randomRotation}deg)`,
          zIndex: -1
        }}
      />
    ]);
  }, []);

  useEventListener("mousedown", clickHandler);

  return (
    <div className="mouse-area">
      {stickers.map((sticker, index) => (
        <React.Fragment key={index}>{sticker}</React.Fragment>
      ))}

      <div className="content-center">
        <div className="content-wrapper">
          <h2 className="greeting-heading">
            Hi there, I'm <b>Ashwin</b>. I build websites and apps.
          </h2>

          <div className="profile-links-wrapper">
            <div className="profile-link-wrapper">
              <a
                href="https://github.com/glocore"
                target="__blank"
                className="profile-link"
              >
                GitHub
              </a>
            </div>
            <div className="profile-link-wrapper">
              <a
                href="https://dev.to/glocore"
                target="__blank"
                className="profile-link"
              >
                Dev.to
              </a>
            </div>
            <div className="profile-link-wrapper">
              <a
                href="https://linkedin.com/in/glocore"
                target="__blank"
                className="profile-link"
              >
                LinkedIn
              </a>
            </div>
            <div className="profile-link-wrapper">
              <a
                href="https://twitter.com/theglocore"
                target="__blank"
                className="profile-link"
              >
                Twitter
              </a>
            </div>
          </div>

          <br />
          <hr style={{ borderTop: "1px solid #EEEEEE" }} />
          <br />

          <a
            href="https://glocore-unsplash-search.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ticket1}
              className="ticket-image"
              alt="project thumbnail"
            />
          </a>
          <a
            href="https://neo-calc.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ticket2}
              className="ticket-image"
              alt="project thumbnail"
            />
          </a>
          <a
            href="https://googly-eyes.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ticket3}
              className="ticket-image"
              alt="project thumbnail"
            />
          </a>

          <br />
          <br />
          <br />
          <h2 className="greeting-heading">
            Thanks for visiting! Stay awesome.
            <span role="img" aria-label="peace emoji">
              ✌
            </span>
          </h2>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
