import React from "react";
import "./CurrentEmoji.css";

export default function CurrentEmoji() {
  let currentEmojiData = {
    picUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    altDescription: "Sunny",
  };

  return (
    <div className="CurrentEmoji">
      <img
        className="CurrentEmojiImgElement"
        src={currentEmojiData.picUrl}
        alt={currentEmojiData.altDescription}
      />
    </div>
  );
}
