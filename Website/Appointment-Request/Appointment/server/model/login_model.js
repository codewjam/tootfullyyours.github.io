//Check

const mongoose = require('mongoose');

var NewUserSchema = new mongoose.Schema({
    p_username:{ type: String, required: true, unique: true},
    p_email:{type: String, required: true, unique: true},
    p_password:{type: String, required: true},
    p_date:{type: Date, default: Date.now}
   
})

const NewUserdb = mongoose.model('NewUserdb', NewUserSchema);

module.exports =  NewUserdb
