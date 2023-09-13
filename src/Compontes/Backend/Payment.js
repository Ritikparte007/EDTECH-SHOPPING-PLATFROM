const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'rzp_test_YFB5AhYJmx1iwf', key_secret: '89vAmsopmbADscI3p6NLrJJi' })

var options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  console.log(order);
});