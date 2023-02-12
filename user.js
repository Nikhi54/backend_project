const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    status:String,
    token:String
})

var userModel = new mongoose.model('userInstance',userSchema);

module.exports = userModel;