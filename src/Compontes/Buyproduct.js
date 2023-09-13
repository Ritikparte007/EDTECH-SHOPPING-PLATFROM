import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Buyproducts.css";
import image from "./image/Screenshot (187).png";
import axios from "axios";

function Buyproduct() {
  // store values ====================================================//

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [Passworld, setpassworld] = useState("");
  const [ChekPassworld, setChekpassworld] = useState("");
  const [Sponsarid, setsponsarid] = useState(null);
  const [nonevalue, setnonevalue] = useState("none");
  const [namerefrral, setreferal] = useState(null);
  const [objectid, setobjectid] = useState("");
  const [orderId, setOrderId] = useState("");

  // ================================end store value =========================//

  // sigup users ================================================================

  const usersdata = async () => {
    try {
      const user = {
        name: name,
        email: email,
        phonenumber: phonenumber,
        Passworld: Passworld,
        Sponsarid: objectid,
      };

      const data = await fetch("http://localhost:5000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } catch {}
  };

  //=============================End user sighup =======================================

  // check sponsar id correct ========================================================//

  const checksponsarid = async () => {
    try {
      const sponsaridsend = {
        sponsar: Sponsarid,
      };
      const sponsarids = await fetch("http://localhost:5000/sponsarid", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sponsaridsend),
      });
    } catch {}
    checkReferral();
  };

  //==========================================================================================//

  const payments = {
    amount: "1000000",
  };

  const handleGetOrderId = async () => {
    try {
      const response = await fetch("/payment/orderid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payments), // Replace with your desired amount
      });

      if (response.ok) {
        const data = await response.json();
        setOrderId(data.orderId);
        pay();
      } else {
        console.error("Failed to get order ID");
        setOrderId("Error");
      }
    } catch (error) {
      console.error("Error:", error);
      setOrderId("Error");
    }
  };

  const checkReferral = async () => {
    try {
      const response = await fetch("http://localhost:5000/referral");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setreferal(data.Name);
      setobjectid(data._id);
    } catch (error) {
      console.error("Error fetching referral data:", error);
    }
  };

  const name1 = (e) => {
    const value = e.target.value;
    setname(value);
  };

  const email1 = (e) => {
    const value = e.target.value;
    setemail(value);
  };

  const phonenumber1 = (e) => {
    const value = e.target.value;
    setphonenumber(value);
  };

  const passworld1 = (e) => {
    const value = e.target.value;
    setpassworld(value);
  };

  const sponsarid1 = (e) => {
    const value = e.target.value;
    setsponsarid(value);
  };

  const chekpassworld = (e) => {
    const value = e.target.value;
    setChekpassworld(value);
  };

  const pass = () => {
    if (Passworld === ChekPassworld) {
      setnonevalue("none"); // Passwords match, set nonevalue to "none"
    } else {
      setnonevalue("block"); // Passwords don't match, set nonevalue to "block"
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const pay = () => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  };

  const options = {
    key: "rzp_test_puVLgDQHPJaMxH",
    currency: "INR",
    amount: "100000",
    name: "Thebank",
    description: "Test Wallet Transaction",
    image: "./image/91548.jpg",
    order_id: orderId,
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: name,
      email: email,
      contact: phonenumber,
    },
  };

  const paymentObject = new window.Razorpay(options);
  // paymentObject.open();

  return (
    <div>
      <Header></Header>
      <div className="mainconataiers-1">
        <div className="maincontainers-2">
          <div className="image">
            <div className="heading-12">
              <h2>Buy products</h2>
            </div>
            <img src={image} alt="" />
          </div>
          <div className="containerss">
            <form action="">
              <div className="inputbox">
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  onChange={name1}
                  value={name}
                />
              </div>

              <div className="inputbox">
                <label htmlFor="">Email id</label>
                <br />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email id"
                  onChange={email1}
                  value={email}
                />
              </div>

              <div className="inputbox">
                <label htmlFor="">Phone number</label>
                <br />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone no."
                  onChange={phonenumber1}
                  value={phonenumber}
                />
              </div>
              <div className="inputbox">
                <label htmlFor="">passworld</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="passworld"
                  onChange={passworld1}
                  value={Passworld}
                />
              </div>

              <div className="inputbox">
                <label htmlFor="">Confirm Passworld</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="confirm Passworld"
                  onChange={chekpassworld}
                  value={chekpassworld}
                />
                <br />
                <span
                  style={{
                    marginLeft: "20px",
                    fontWeight: "500",
                    color: "red",
                    display: nonevalue,
                  }}
                >
                  wrong pawworld
                </span>
              </div>

              <div className="inputbox">
                <label htmlFor="">sponsorship id</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="sponsorship id"
                  onChange={sponsarid1}
                  value={Sponsarid}
                />
                <div>
                  <span>{namerefrral}</span>
                </div>
                <div onClick={checksponsarid}>click</div>
                <br />
              </div>
              <div className="submitbtn">
                <button onClick={usersdata}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buyproduct;
