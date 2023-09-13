import React from "react";
import Header from "./Header";
import "./Maincontainer.css";

function Maincontainer() {
  return (
    <>
      <Header></Header>
      <div className="containerstorevideo">
        <div className="video">
          <video src=""></video>
        </div>
      </div>
      <div className="startvideo">
        <button>wath vide</button>
      </div>
    </>
  );
}

export default Maincontainer;
