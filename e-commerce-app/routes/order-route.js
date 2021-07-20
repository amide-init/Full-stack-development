const router = require('express').Router()
const razorpay = require('razorpay')
const Order = require('../models/order')
const authCheck = require('../middleware/check-auth')
var instance = new razorpay({
    key_id: 'rzp_test_XeXDZ1bfrkFjXG',
    key_secret: 'ICtqt29GIFRpvRBC0W80TEx5'
})

router.post('/create', authCheck, (req, res) => {
    var options = {
        amount :req.body.amount,
        currency : "INR",
        receipt: "MYSHOP" + new Date().getTime(),
        payment_capture: "0"
    }
    instance.orders.create(options, async (err, order) => {
        if(err) {
            res.json({success : false, error: err})
        }else {
           const myOrder = Order({
            raz_orderId : order.id,
            amount: order.amount,
            user: req.userData.userId
           })
          myOrder.save()
                 .then((result) => {
                     res.json({success : true, message: 'Order has been created'})
                 })
                 .catch((er) => {
                     res.json({success: false, messge: "Mongo error"})
                 })
        }
    })
})

router.post('/payment', (req, res) => {

})

module.exports =  router;


