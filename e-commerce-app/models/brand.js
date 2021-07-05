const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    title : {type:String},
    description: {type:String},
    thumbnail: {type: String},
    category: {type:String},
    created_At: {type:Number},
    updated_At: {type:Number}
})

module.exports = mongoose.model("Brand", BrandSchema);