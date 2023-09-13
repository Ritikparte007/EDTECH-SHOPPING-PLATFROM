import React from "react";
import Header from "./Header";
import "./Aboutus.css";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Header></Header>
      <>
        <div className="Aboutus-12">
          <div className="headingabout">
            <h1>Contact</h1>
          </div>
          <div className="aboutus-123">
            <div className="Containerabout123">
              <div className="inputfield">
                <label htmlFor="">Name</label><br />
                <input type="text" name="" id="" placeholder="Name" />
                
              </div>
              <div className="inputfield">
                <label htmlFor="">Email</label><br />
                <input type="text" name="" id="" placeholder="Email" />
                
              </div>
              <div className="inputfield">
                <label htmlFor="">Phoen</label><br />
                <input type="text" name="" id="" placeholder="Phone no." />
                
              </div>
              <div className="inputfield">
                <label htmlFor="">Describe</label><br />
                <textarea name="" id="" cols="30" rows="10" placeholder="text"></textarea>
                
              </div>
              <div className="btnsubmit">
                <button>Submit</button>
                
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    </>
  );
}

export default Contact;
