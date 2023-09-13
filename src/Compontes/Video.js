import React from "react";
import "./Video.css";
import Maincontainer from "./Maincontainer";
import Header from "./Header";

function Video() {
  return (
    <>
      <Header></Header>
      <div className="videos">
        <div>
          <div>
            <video className="videocontent" src=""></video>
          </div>
          <div>
          <h1>digital marketing full course</h1>
        </div>  
        </div>
       
      </div>
    </>
  );
}

export default Video;
