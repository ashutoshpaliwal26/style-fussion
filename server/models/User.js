import mongoose from "mongoose";

const userSchame = new mongoose.Schema({
  name : {
    type : String,
    require : [true, "Enter You Name"]
  }, 
  email : {
    type : String,
    require : [true, "Enter Your Email"],
    unique : true
  },
  address : {
    type : String,
    require : [true, "Enter you Address"]
  },
  password : {
    type : String,
    require : [true, "Enter Your Password"]
  }
})

export const User = mongoose.model("User", userSchame);

