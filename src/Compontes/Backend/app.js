const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PaytmChecksum = require("paytmchecksum");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const Razorpay = require('razorpay');
const routes = require('./Routesh')

const {main} = require('./Server')







app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

main()




app.use("/", routes);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});













