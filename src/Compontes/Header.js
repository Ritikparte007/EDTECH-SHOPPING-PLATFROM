import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./image/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header() {
  const [btnvalue, setbtnvalue] = useState("");
  const [btnvalue2, setbtnvalue2] = useState("");
  const[headmenunone,setheadmenunone] = useState("")
  const[login,setlogin] =useState('');
  const [scrollEnabled, setScrollEnabled] = useState(true);

  

  const btbclick = () => {
    setbtnvalue("none");
    setbtnvalue2("block");
    setheadmenunone("block")
  };

  const btbclick2 = () => {
    setbtnvalue2("none");
    setbtnvalue("block");
    setheadmenunone("none")
  };
  const btnlogin = () =>{

    setlogin("block")

  }

  return (
    <>
     <div className="Headermenu" style={{display:headmenunone}}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Course</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className="contaners">
        <div className="open" onClick={btbclick} style={{ display: btnvalue }}>
          <MenuIcon></MenuIcon>
        </div>
        <div
          className="close"
          onClick={btbclick2}
          style={{ display: btnvalue2 }}
        >
          <CloseIcon className="close"></CloseIcon>
        </div>

        <div className="gologinsighup">
          <a href="">login</a>
          <br />
          <a href="">sighup</a>
        </div>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="Header">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/Maincourse'}>Products</Link>
            </li>
            <li>
              <Link to={'/Aboutus'}>About us</Link>
            </li>
          </ul>
        </div>
        <div className="container">
         <Link to={'/Maincourse'}>Enroll</Link>
         <Link to={'/login'}>Login</Link>
     
        </div>
        <div className="account" onClick={btnlogin}  style={{display:login}}>
          <AccountCircleIcon></AccountCircleIcon>
        </div>
      </div>
    </>
  );
}

export default Header;
