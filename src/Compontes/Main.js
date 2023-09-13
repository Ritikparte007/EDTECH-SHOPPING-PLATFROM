import React from "react";
import "./main.css";
import Course from "./Course";
import Ranked from "./Ranked";
import Country from "./Country";
import Band from "./Band";
import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";
import Videoshow from "./Videoshow";
import Game from './Game'
import Supported from "./Supported";

function Main() {
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="heading">
          <h1>E-Commerce platform provide to best course and game </h1>
          <span>and give opportinue to make money</span>
        </div>
      </div>
      <Course></Course>
      <Videoshow></Videoshow>
      <Country></Country>
      <Game></Game>
      <Ranked></Ranked>
      <Supported></Supported>
      <div className="reviews">
        <Reviews></Reviews>
      </div><br />

      {/* <Band></Band> */}
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
