import React from "react";
import sunnyPic from "./images/sunny-pic.svg"

export default function CurrentEmoji() {
  let currentEmojiData = {
    pic: sunnyPic,
    altDescription: "Sunny",
  };

  return (
    <div className="CurrentEmoji">
      <img
        className="CurrentEmojiImgElement"
        src={currentEmojiData.pic}
        alt={currentEmojiData.altDescription}
      />
    </div>
  );
}
