import React from "react";
import "./Course.css";
import image from "./image/5663384.jpg";
import images3 from "./image/8966012.jpg";
import image2 from "./image/Screenshot (191).png";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";

function Course() {


















  
  return (
    <div className="joincourse">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1>Choose your products</h1>
      </div>

      <div className="silvercon">
        <div className="containercourse">
          <div>
            <div className="bronze">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              >
                <h2>Digital Marketing</h2>
              </div>
              <div className="goldradius">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div></div>

          <div className="btn012"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop:"5px"
             
            }}
          >
            <span style={{ fontWeight: "500" }}>Rs.2500</span>
          </div>
          <div className="btn">
            <Link to={"/Buyproduct"}>
              Buy
              <LocalGroceryStoreIcon
                style={{ marginLeft: "5px" }}
              ></LocalGroceryStoreIcon>
            </Link>
          </div>
        </div>

        <div className="containercourse">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="silver">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              >
                <h2>Master Money</h2>
              </div>
              <div className="silverradius">
                <img src={image2} alt="" />
              </div>
            </div>
          </div>
          <div className="price123"
            style={{
              display: "flex",
              justifyContent: "center",
              
              // paddingBottom: "30px",
            }}
          >
            <span style={{ fontWeight: "500" }}>Rs.3999</span>
            <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div className="btn">
              <a href="">
                buy
                <LocalGroceryStoreIcon
                  style={{ marginLeft: "5px" }}
                ></LocalGroceryStoreIcon>
              </a>
            </div>
          </div>
        </div>

        <div className="containercourse">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="gold">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              >
                <h2>Artificial Intelligence</h2>
              </div>
              <div className="goldradius">
                <img src={images3} alt="" />
              </div>
            </div>
          </div>
          <div className="btn012"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
             
            }}
          >
            <span style={{ fontWeight: "500" }}>Rs.5999</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <div className="btn">
              <a href="">
                Buy
                <LocalGroceryStoreIcon
                  style={{ marginLeft: "5px" }}
                ></LocalGroceryStoreIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
