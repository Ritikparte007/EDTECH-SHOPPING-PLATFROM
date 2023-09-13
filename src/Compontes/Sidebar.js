import React, { useEffect, useState } from "react";
import Account from "./Account";
import { Link, json } from "react-router-dom";
import "./Sidebar.css";
import Header from "./Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Coursevideo from "./Coursevideo";
import Userrefearl from "./Userrefearl";

function Sidebar() {

  
  // ============================ useState store  ==============================================

  const [accoutn, setaccoutn] = useState("");
  const [courselist, setcourselist] = useState("");
  const [userrefael, setuserrefeal] = useState("");
  // ======================== twohundred 200 rs referal ===================================================
  const [twohundred, settwohundred] = useState([]);
  // ========================= count sponsar ids =============================================
  const [cout, setcount] = useState("");
  // ========================== end sponsar  ids=============================================
  const [onethousand, setonethousand] = useState("");
  const [idssponsar, setidssponsar] = useState([]);
  const [useradata, setUserData] = useState([]);
  // ====================================ids =================================================
  const [idsdatathirdusers, setidsdatathirdusers] = useState([]);

  const [thirduser, setthirduser] = useState([]);
  // ============================= collectxtsorids  1000 ids stores ============================================
  const collectsponsarids = [];

  let totalSponsorCount = 0;
  // console.log(cout)

  // ================================== functions ===============================================

  const countElements = () => {
    setcount(twohundred.length);
  };

  for (const userId in useradata) {
    if (useradata.hasOwnProperty(userId)) {
      const user = useradata[userId];
      const sponsarIds = user.Sponsarid;
      const sponsarCount = sponsarIds.length;
      collectsponsarids.push(sponsarIds);
      totalSponsorCount += sponsarCount;
    }
  }


  for (const userId in useradata) {
    if (useradata.hasOwnProperty(userId)) {
      const user = useradata[userId];
      const sponsarIds = user.Sponsarid;
      const sponsarCount = sponsarIds.length;
      collectsponsarids.push(sponsarIds);
      totalSponsorCount += sponsarCount;
    }
  }






  const datassss = [];
  const datas = [];

  // datassss.push(idsdatathirdusers.slice(0,idsdatathirdusers.length));

  const [datadetch, setdatafetch] = useState("");
  const [countvalues, setcountvalues] = useState("");

  const [totalItemCounts, setTotalItemCounts] = useState(0);
  // console.log("Cumulative Total:", totalItemCounts);
  // console.log(idsdatathirdusers)
  useEffect(() => {
    // Flatten the array by concatenating its sub-arrays
    let flattenedArray = [].concat(...idsdatathirdusers);

    
    let currentItemCount = flattenedArray.length;
    let totalElements = 0;
    totalElements  = currentItemCount;
    setTotalItemCounts(totalElements);
    // console.log(totalElements)
  }, [idsdatathirdusers, totalItemCounts]);


  
  
  




  
  
  const [countthird, setcountthird] = useState("")
  const [countthirdvalue, setcountthirdvalue] = useState([])
  let dataArray = []; // Define dataArray as a variable
  let arraycount =[];
  let gry = 0;

//  ==================================== dont change ==================================

  async function sendapirequestsponsarid(sponsaridstwo) { 
    try {
     
        const response = await fetch(
          `http://localhost:5000/sponsaridstwo/${sponsaridstwo}`
        );
        const twodata = await response.json();
        dataArray = twodata.Sponsarid // Assign the fetched data to dataArray
               //  console.log(dataArray.Sponsarid.length)
          let countaary = dataArray.length;
          setcountthirdvalue(countaary);
          console.log(countaary)
         
               
                 

   

    
    
       
    
      

      
     
    } catch (error) {
      console.error(error);
    }
  }

gry += countthirdvalue;

  
  
  
  
  

  async function fetchdatasponsarid() {
    for (const innerarray of collectsponsarids) {
      for (const sponsaridstwo of innerarray) {
        await sendapirequestsponsarid(sponsaridstwo);
      }
    }
  }



  useEffect(()=>{
    fetchdatasponsarid(); 
  })

  // ============================================end dont touch this code====================

  // ==================================== third200hundread rupeee======================

  async function fetchSingleId(id) {
    try {
      const response = await fetch(
        `http://localhost:5000/twohundredthird/${id}`
      );
      const twodata1 = await response.json();
      setdatafetch((prevUserData) => ({ 
        ...prevUserData,
        [id]: twodata1, 
      }));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  
  async function fetchAllIds() {
    try {
    
      for (const innerarray1 of datassss) {
        for (const id of innerarray1) {
          // console.log(id)
          await fetchSingleId(id);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  
  fetchAllIds();

  // ================================ end 200 third hundred ==========================================

  // wallet systeam users ============================================================================

  let wallet = cout * 200;
  let wallet2 = totalSponsorCount;
  let fullwallet = countthirdvalue * 200;
  let wallet3 = wallet + wallet2 + fullwallet;
  // let wallet4 = null;
  let walletwithdrawl = 1000;
 let  wallet4 = wallet3 - walletwithdrawl;
  // console.log(wallet2)

  if (0 < fullwallet) {
    const value = fullwallet;
    // console.log(value + fullwallet);
  }


  

   

  
   

  // ========================================= End wallet systeam ======================================

  // ========================================== 1000 amount fetch data ====================================

  useEffect(() => {
    const fetchDataForId = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:5000/thousanduserdwalletupdate/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData((prevUserData) => ({
          ...prevUserData,
          [id]: data, 
        }));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchDataForAllIds = async () => {
      try {
        await Promise.all(twohundred.map((id) => fetchDataForId(id)));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataForAllIds(); 
  }, [twohundred]);

  // ============================================== 1000 end ======================================

  // =============================================== users wallet update ============================
  const updatewalle1 = async () => {
    try {
      let data = {
        id: "64f5c08edc4e425a4503be4e",
        amount: wallet3,
      };
      const response = await fetch("http://localhost:5000/wallet1update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch {
      console.log();
    }
  };

  // =========================================== Und user wallet update ==============================

  // =========================================== Call function aotomatic ==============================

  useEffect(() => {
    updatewalle1();
    countElements();
  });

  // ===========================================   end function call ===================================

  // ==============================================  userdatafetch ========================================

  const allusers = async () => {
    try {
      const response = await fetch("http://localhost:5000/getusersdata");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data.Sponsarid);
      settwohundred(data.Sponsarid);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ============================================ End fetch users data ===============================

  useEffect(() => {
    allusers();
  });

  // ============================================= Click function btn ===================================

  const account = () => {
    setaccoutn("block");
    setcourselist("none");
    setuserrefeal("none");
  };
  const user = () => {
    setuserrefeal("block");
    setcourselist("none");
    setaccoutn("none");
  };
  const list = () => {
    setcourselist("block");
    setaccoutn("none");
    setuserrefeal("none");
  };
  // =================================================== react code =======================================

















  return (
    <>
      <Header />
      <div className="acadd">
        <div className="Accounts">
          <div className="mainsidebar">
            <h1>thebank</h1>
            <div className="linkss">
              {/* Example usage of Link component */}
              <button onClick={account}>
                Account
                {/* <AccountCircleIcon style={{ color: "white" }} /> */}
              </button>
            </div>
            <div className="linkss">
              {/* <AutoStoriesIcon style={{ color: "white" }} /> */}
              <button onClick={list}>Course</button>
            </div>
            <div className="linkss">
              {/* <AutoStoriesIcon style={{ color: "white" }} /> */}
              <button onClick={list}>Game</button>
            </div>
            <div className="linkss">
              {/* <SupervisorAccountIcon style={{ color: "white",marginTop:'5px' }} /> */}
              <button onClick={user}>User referal</button>
            </div>
            <div className="linkss">
              {/* <SupervisorAccountIcon style={{ color: "white",marginTop:'5px' }} /> */}
              <button onClick={user}>Payment History</button>
            </div>
          </div>
        </div>
        <div className="courselist" style={{ display: accoutn }}>
          <Account />
        </div>
        <div className="coursevideo" style={{ display: courselist }}>
          <Coursevideo></Coursevideo>
        </div>
        <div className="userrefael" style={{ display: userrefael }}>
          <Userrefearl></Userrefearl>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
