const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    raz_orderId : {type:String},
    raz_paymentId: {type:String},
    amount: {type: String},
    status: {type:Boolean, default: false},
    user: {type:mongoose.Types.ObjectId,},
    created_At: {type:Number, default: Date.now().valueOf()},
    updated_At: {type:Number, default: Date.now().valueOf()}
})

module.exports = mongoose.model("Order", OrderSchema);