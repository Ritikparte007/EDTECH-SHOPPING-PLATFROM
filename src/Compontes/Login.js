import React from "react";
import "./Loign.css";
import Header from "./Header";
import imagess from './image/Screenshot (187).png'
function Login() {
  return (
    <>
      <Header></Header>
      <div className="mainconataiers-1">
        <div className="maincontainers-2">
        <div className="image">
            <div className="heading-12">
            <h2>Buy products</h2>
            </div>
            <img src={imagess} alt="" />
          </div>
          <div className="containerss">
            <div className="heading-12">
              <h2>Login</h2>
            </div>
            <form action="">
              <div className="inputbox">
                <label htmlFor="">Email id</label>
                <br />
                <input type="email" name="" id="" placeholder="Email id" />
              </div>

              <div className="inputbox">
                <label htmlFor="">Passworld</label>
                <br />
                <input type="text" name="" id="" placeholder="Passworld" />
              </div>
            

              <div className="submitbtn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
