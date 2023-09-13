import React, { useState } from "react";
import "./Ranked.css";
import men from "./image/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import menimage from "./image/Screenshot (184).png";

function Ranked() {

  const [slider,setslider] =useState("")
  const [block,setblock] =useState("block")

console.log(slider)
  const slid = () =>{
    setslider("200px")
    setblock("block")
  }

  return (
    <>
      <div className="ran">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <h1>Top Ranked</h1>
        </div>
        <div className="topuser" style={{ marginTop: "10px" }}>
          {/* <button className="btn1" onClick={ slid}>C</button> */}
          <div className="user-5" style={{paddingLeft:`{slider}px`}}>


            <div className="usercontainer" >
              <div className="image-12">
                <img src={menimage} alt="" srcset="" />
              </div>
              <div>
                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Id</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>758454</span>
                    </div>
                  </div>
                </div>

                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Revenue</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="usercontainer" >
              <div className="image-12">
                <img src={menimage} alt="" srcset="" />
              </div>
              <div>
                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Id</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>758454</span>
                    </div>
                  </div>
                </div>

                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Revenue</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="usercontainer" style={{display:block}}>
              <div className="image-12">
                <img src={menimage} alt="" srcset="" />
              </div>
              <div>
                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Id</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>748542584</span>
                    </div>
                  </div>
                </div>

                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Revenue</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="usercontainer">
              <div className="image-12">
                <img src={menimage} alt="" srcset="" />
              </div>
              <div>
                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Id</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>748542584</span>
                    </div>
                  </div>
                </div>

                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Revenue</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="usercontainer">
              <div className="image-12">
                <img src={menimage} alt="" srcset="" />
              </div>
              <div>
                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Id</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>748542584</span>
                    </div>
                  </div>
                </div>

                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Revenue</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="usercontainer">
              <div className="image-12">
                <img src={menimage} alt="" srcset="" />
              </div>
              <div>
                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Id</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>748542584</span>
                    </div>
                  </div>
                </div>

                <div className="user-345">
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label htmlFor="">Revenue</label>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span>50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            
          </div>
        {/* <button className="btn1">click</button> */}
        </div>
      </div>
    </>
  );
}

export default Ranked;
