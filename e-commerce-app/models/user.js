const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {type:String, required: true, unique: true},
    firstname: {type:String, required: true},
    lastname: {type: String},
    password: {type:String, required: true},
    created_At: {type:Number, default: Date.now().valueOf()},
    updated_At: {type:Number, default: Date.now().valueOf()}
})

module.exports = mongoose.model("User", UserSchema);