// database1.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const userSchema = new Schema({
    Name: String,
    Email: String,
    PhoneNo: String,
    image: String,
    Passworld: String,
    Accountbalance1: String,
    Accountbalance2: String,
    Accountbalance3: String,
    Accountbalancetotal: String,
    Accountbalancehistorywithdraw: String,
    Sponsarid: [String],
    Referal2: [String],
    Referal3: [String],
    Referal4: [String],
    uniqueid: String,
    wallet: String,
  });
  
  
  const containetSchema = new Schema({
    heading: String,
    image: [String],
    price: String,
    video: String,
  });
  
  
  

  const database1 = mongoose.model("Users", userSchema);
  const database2 = mongoose.model("Course", containetSchema);
  
  
module.exports = {database1,database2}