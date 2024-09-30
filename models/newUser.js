const mongoose=require('mongoose');
const timeStamps=require('mongoose-timestamps');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    firstName:{ type:String},
    lastName:{ type:String},
    email:{ type:String},
    password:{ type:String},
    mobileNo:{ type:String},
    createdAt:Date,
    updatedAt:Date


})
UserSchema.plugin(timeStamps,{index:true});

module.exports=mongoose.model('newUser',UserSchema)