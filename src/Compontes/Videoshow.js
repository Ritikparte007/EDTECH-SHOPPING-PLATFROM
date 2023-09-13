import React from "react";
import videos from "./video/IMAGINE FOR 1 MINUTE.mp4";
import "./Videoshow.css";

function Videoshow() {
  return (
    <div className="mainvideo">
      <div
        className="videoheading"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>Course Demo</h1>
      </div>
      <div className="mainvideo-1">
        <div>
          <video src={videos} controls></video>
        </div>
      </div>
    </div>
  );
}

export default Videoshow;
