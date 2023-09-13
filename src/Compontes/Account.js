import React from "react";
import "./Account.css";
import Header from "./Header";
import peole from './image/Screenshot (184).png'
import rupee from "./image/icons8-rupee-24.png"

function Account() {
  return (
    <>
     
      <div>
        <div className="Account">
          <div className="imgaccount">
            <div className="image-1">

            <img style={{}} src={peole} alt="" /><br />
            </div>
            <span>Akash uikey</span><br />
            <div className="id">
            <label htmlFor="">Id =</label>
            <span>1234565</span><br />
            </div>
            <div>
              <span>Refral = 12 </span>
              
            </div>
            <div className="btn">
            <button>Edit</button>

            </div>
          </div>
         <div className="revenueshow">
            <div className="oneday">
            <label htmlFor="">Today revenue</label><br />
           <div style={{display:"flex",marginTop:"5px"}}>
           <img src={rupee} alt="" />
            <span>1000</span>
           </div>
            </div>
            <div className="sevenday">
            <label htmlFor="">Weekly revenue</label><br />
            <div style={{display:"flex",marginTop:"5px"}}>
            <img src={rupee} alt="" />
            <span>5000</span>
            </div>
            </div>
            <div className="onemonth">
            <label htmlFor="">Monthly revenue</label><br />
            <div style={{display:"flex",marginTop:"5px"}}>
            <img src={rupee} alt="" />
            <span>10000</span>
            </div>
            </div>
         </div>
        </div>
        <div  className="withtraw1">
            <div className="withtraw">
              
                <label htmlFor="">Total amount</label><br />
                <span>126088</span>
                  
            </div>
        </div>
       
      </div>
    </>
  );
}

export default Account;
