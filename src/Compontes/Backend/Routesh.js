const express = require("express");
const Router = express.Router();
const Razorpay = require("razorpay");
const cors = require('cors');
const app = express();

const { database1, database2 } = require("./Modues");



var instance = new Razorpay({
  key_id: "rzp_test_puVLgDQHPJaMxH",
  key_secret: "ItpegWf6cHN8xbSUhAjVA7sW",
});

Router.post("/payment/orderid", async (req, res) => {
  const payment = req.body;

  var options = {
    amount: "500", // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({ orderid: order.id });
  });
});

let idthousand = [];

console.log(idthousand);


Router.post("/thousandid", async (req, res) => {
  try {
    const datathousandid = req.body;
    const myid = datathousandid;
    console.log(myid);
    idthousand = datathousandid;
    res.sendStatus(200);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "Invalid JSON data" });
  }
});










Router.get('/thousanduserdwalletupdate/:id', async (req, res) => {
  const id = req.params.id; // Extract the id from the URL parameter

  try {
    const response = await database1.findById(id);

    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});









Router.post("/coursedata", async (req, res) => {
  const data = req.body;

  const h = data.heading1;
  const imagess = data.image1;
  const pricess = data.price1;
  const videoss = data.video1;

  const storedata = new database2({
    heading: h,
    image: imagess,
    price: pricess,
    video: videoss,
  });

  try {
    await storedata.save();
    res.status(200).json({ message: "Data received and saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// let ids = null;
// Router.post("/sendreferalid",(req,res)=>{
//   const datasrefrealid = req.body
//   ids = datasrefrealid.id;

// })\

Router.post("/wallet1update", async (req, res) => {
  try {
    const data = req.body;

    const response = await database1.findByIdAndUpdate(
      data.id,

      { wallet: data.amount },
      { new: true }
    );
    if (!response) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json(response);
  
    res.status(500).json({ message: "Internal Server Error" });
  }catch{

  }
});



Router.get("/sponsaridstwo/:sponsaridstwo",async(req,res)=>{
  const sponsarid = req.params.sponsaridstwo;
  const response = await database1.findById(sponsarid)
  res.json(response)
})



// Router.get("/twohundredthird/:id",async(req,res)=>{
//   const sponsarid1 = req.params.id;
//   console.log(sponsarid1)

//   const response = await database1.findById(sponsarid1)
//   res.json(response)
// })








Router.get("/getusersdata", async (req, res) => {
  const response = await database1.findById("64f5c08edc4e425a4503be4e");
  res.json(response);
});

Router.get("/allusers", async (req, res) => {
  const response = await database1.find();
  res.json(response);
});

Router.post("/users", async (req, res) => {
  function generateUniqueNumber(existingNumbers, maxAttempts = 1000000) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      const randomNumber = Math.floor(Math.random() * 1000000); // Adjust the range as needed
      if (!existingNumbers.includes(randomNumber)) {
        return randomNumber;
      }
      attempts++;
    }
    throw new Error(
      "Unable to generate a unique number after maximum attempts."
    );
  }

  // Example usage:
  const existingNumbers = [];
  const uniqueNumber = generateUniqueNumber(existingNumbers);

  const datas = req.body;

  const name = datas.name;
  const email = datas.email;
  const phone = datas.phonenumber;
  const passworld = datas.Passworld;
  const sponsarid = datas.Sponsarid;
  const id = uniqueNumber;
  const wallet = "00";

  const data = new database1({
    Name: name,
    Email: email,
    PhoneNo: phone,
    // Sponsarid: sponsarid,
    Passworld: passworld,
    uniqueid: id,
    wallet: wallet,
  });

  try {
    const id = await data.save();
    console.log(id._id);
    const datass = await database1.findById(sponsarid);
    datass.Sponsarid.push(id._id);
    await datass.save();
  } catch {}
});

Router.get("/account", async (req, res) => { 
  const accountinfo = await database1.findById();
  res.json(accountinfo);
});

Router.get("/referral", async (req, res) => {
  const chekrefferal = await database1.findById(sponsorUserId);
  res.json(chekrefferal);
});

let sponsorUserId = null;

Router.post("/sponsarid", async (req, res) => {
  const dataid = req.body;
  const sponsarid = dataid.sponsar;

  try {
    const sponsorUser = await database1.findOne({ uniqueid: sponsarid });

    if (sponsorUser === null) {
      // Check if the sponsorUser is null
      return res.status(404).json({ message: "Sponsor ID not found." });
    }

    // Retrieve the ObjectID of the sponsor user
    sponsorUserId = sponsorUser._id;

    res.status(200).json({ sponsorUserId });
  } catch (error) {
    console.error("Error checking sponsor ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = Router;


