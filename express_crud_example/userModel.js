const mongoose =require('mongoose');
let userScheme = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    age:String,
    email:String,
    password:String
})

module.exports=mongoose.model('users',userScheme);