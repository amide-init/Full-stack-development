const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title : {type:String},
    description: {type:String},
    thumbnail: {type: String},
    category: {type:String},
    brand : { type:mongoose.Types.ObjectId, },
    price : {type:Number},
    created_At: {type:Number, default: Date.now().valueOf()},
    updated_At: {type:Number, default: Date.now().valueOf()}
})

module.exports = mongoose.model("Item", ItemSchema);