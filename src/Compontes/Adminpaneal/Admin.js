import React, { useEffect, useState } from "react";
import "./Admin.css";
import Header from "../Header";

function Admin() {
  const [addproductss, setaddproductss] = useState("");
  const [userss, setuserss] = useState("none");

  const [image, setimage] = useState([]);
  const [video, setvideo] = useState("");
  const [file, setfile] = useState("");
  const [heading, setheading] = useState("");
  const [price, setprice] = useState("");

  const images = (e) => {
    const value = e.target.files[0];
    setimage(value);
  };

  const videos = (e) => {
    const value = e.target.files;
    setvideo(value);
  };

  const files = (e) => {
    const value = e.target.files;
    setfile(value);
  };

  const headingss = (e) => {
    setheading(e.target.value);
  };

  const pricess = (e) => {
    setprice(e.target.value);
  };

  const addproducts = () => {
    setaddproductss("block");
    setuserss("none");
  };

  const users = () => {
    setaddproductss("none");
    setuserss("block");
  };

  const handleSubmit = async () => {


    const datas = {
      image1: image,
      video1: video,
      file1: file,
      heading1: heading,
      price1: price,
    };

    
    try {
      const response = await fetch("http://localhost:5000/coursedata", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Data sent successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error sending data");
      }
    } catch (error) {
      console.log(error)
    }
  };
  
    


  

 


  return (
    <>
      <Header></Header>

      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "2px solid red",
            width: "200px",
            backgroundColor: "blue",
          }}
        >
          <button
            style={{ width: "100%", height: "30px", marginTop: "10px" }}
            onClick={addproducts}
          >
            Add Products
          </button>
          <br />
          <button
            style={{ width: "100%", height: "30px", marginTop: "10px" }}
            onClick={users}
          >
            edit Products
          </button>
          <br />
          <button style={{ width: "100%", height: "30px", marginTop: "10px" }}>
            Users
          </button>
          <br />
        </div>
        <div
          style={{
            border: "2px solid black",
            width: "100%",
            display: addproductss,
          }}
        >
          <div style={{ marginLeft: "50px", marginTop: "20px" }}>
            <form action="">
              <label htmlFor="">image</label>
              <br />
              <input
                type="file"
                name=""
                id=""
                placeholder="file"
                accept="image/png, image/jpeg"
                onChange={images}
              />
              <br />
              <label htmlFor="">Video</label>
              <br />
              <input type="file" name="" id="" onChange={videos} />
              <br />
              <label htmlFor="">file</label>
              <br />
              <input type="file" name="" id="" onChange={files} />
              <br />
              <label htmlFor="">Heading</label>
              <br />
              <input
                style={{
                  marginTop: "10px",
                  width: "300px",
                  height: "30px",
                  borderRadius: "5px",
                }}
                type="text"
                name=""
                id=""
                onChange={headingss}
                value={heading}
              />
              <br />
              <label htmlFor="">Price</label>
              <br />
              <input
                style={{
                  width: "300px",
                  height: "30px",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
                type="number"
                name=""
                id=""
                onChange={pricess}
                value={price}
              />
              <br></br>
              <button style={{ marginTop: "10px" }} onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
        <div
          style={{ border: "2px solid black", width: "100%", display: userss }}
        >
          <div style={{ marginLeft: "50px", marginTop: "20px" }}>
            <span>Users</span>
            <div style={{ border: "2px solid blue" }}>
              <table>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>mobile No.</th>
                    <th>Email</th>
                    <th>Revenue</th>
                    <th>Widhraw</th>
                    <th>Passworld</th>
                    <th>Date</th>
                    <th>Refearl</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ritik</td>
                    <td>770806676</td>
                    <td>ritikparte458@gmail.com</td>
                    <td>78458</td>
                    <th>dfsdf</th>
                    <td>5565654645645</td>
                    <td>12/32/323</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
