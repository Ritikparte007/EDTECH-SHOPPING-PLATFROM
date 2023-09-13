import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Visacardimage from './image/vecteezy_visa-logo-vector-visa-icon-free-vector_20336485.jpg'
import Mastercard from './image/mastercard-vector.jpg'
import Upi from './image/UPI_logo_PNG_lyp5s5.png'

function Footer() {
  return (
    <div>
      <div className="footersection">
        <div className="about">
          <h2>Company info</h2>
          <div className="links">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/Aboutus'}>About us</Link>
            </li>
            <li>
              <a href="">learn</a>
            </li>
          </ul>
          </div>
        </div>
        <div className="about">
          <h2>Learn more</h2>
          <ul>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
               <Link to={'/termsofuse'}>Terms of use</Link>
            </li>
            <li>
              <Link to={'/Privacypolicy'}>Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="about">
          <h2>Need help</h2>
          <ul>
            <li>
             <Link to={'/Contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/Faq'}>FaQ</Link>
            </li>
         
          </ul>
        </div>
      </div>
      <div
        className="bottom"
        style={{ display: "flex", justifyContent: "center",height:'50px' }}
      >
        <span>
          @ https://Thebank.com E-commarce Pvt. Ltd All right reserved.
        </span>
        <img src={Visacardimage} alt="" />
        <img src={Mastercard} alt="" />
        <img src={Upi}></img>
      </div>
      {/* <div className="copyright">
        <span>2023@copyrightthebank</span>
      </div> */}
    </div>
  );
}

export default Footer;
