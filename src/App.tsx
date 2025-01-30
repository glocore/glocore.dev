import React, { ReactElement } from "react";
import { useEventListener } from "./hooks";
import "./styles.css";
import sticker1 from "/stickers/sticker1.png";
import sticker2 from "/stickers/sticker2.png";
import sticker3 from "/stickers/sticker3.png";
import sticker4 from "/stickers/sticker4.png";
import sticker5 from "/stickers/sticker5.png";
import sticker6 from "/stickers/sticker6.png";
import sticker7 from "/stickers/sticker7.png";
import sticker8 from "/stickers/sticker8.png";
import sticker9 from "/stickers/sticker9.png";
import sticker10 from "/stickers/sticker10.png";
import ticket1 from "/thumbnails/ticket1.png";
import ticket2 from "/thumbnails/ticket2.png";
import ticket3 from "/thumbnails/ticket3.png";

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
  sticker10,
];

let uniqueStickers = [...stickers];

stickers.forEach((sticker) => {
  new Image().src = sticker;
});

const getRandomSticker = () => {
  if (!uniqueStickers.length) {
    uniqueStickers = [...stickers];
  }

  const randomIndex = Math.floor(Math.random() * uniqueStickers.length);
  const sticker = uniqueStickers.splice(randomIndex, 1)[0];

  return sticker;
};

export default function App() {
  const [stickers, setStickers] = React.useState<ReactElement[]>([]);

  const clickHandler = React.useCallback(
    ({ clientX, clientY }: { clientX: string; clientY: string }) => {
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
            pointerEvents: "none",
            zIndex: -1,
          }}
        />,
      ]);
    },
    []
  );

  useEventListener("mousedown", clickHandler);

  return (
    <div className="mouse-area">
      {stickers}

      <div className="content-center">
        <div className="content-wrapper">
          <h2 className="greeting-heading">
            hi, i'm <b>glocore</b>. i build websites and apps.
          </h2>

          <div className="profile-links-wrapper">
            <div className="profile-link-wrapper">
              <a
                href="https://github.com/glocore"
                target="_blank"
                className="profile-link"
              >
                github
              </a>
            </div>
            <div className="profile-link-wrapper">
              <a
                href="https://dev.to/glocore"
                target="_blank"
                className="profile-link"
              >
                dev.to
              </a>
            </div>
            <div className="profile-link-wrapper">
              <a
                href="https://twitter.com/glocore_tweets"
                target="_blank"
                className="profile-link"
              >
                twitter
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
            className="project-link"
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
            thanks for visiting! stay awesome.
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
