import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const logInUser= asyncHandler(async(req,res)=>{
   const {email,password}=req.body;

  try {
    if(!(email||password)){
throw new ApiError(401,"ivalid credential");
    }

    const user= await User.findOne({email});
    if(!user){
        throw new ApiError(401,"user is invalid!");

    }

    //hashing the password
    const isMatch= await bcrypt.compare(password,user.password);
    if(isMatch){
        throw new ApiError(401,"invalid password");

    }

    const token = jwt.sign(
        { _id: user._id, email: user.email }, // Payload
        process.env.jwtToken,             // Secret key
        { expiresIn: process.env.jwtExpiry }                 // Token validity
    );

    return res.status(200).json(new ApiResponse(200,token,"user is logggedIn successfully!!"));
    
  } catch (error) {
    console.log(`error in login ${error}`);
    
  }
 
  
});

const resetPassword= asyncHandler(async(req,res)=>{
    const {email}=req.body;
    
});


export {logInUser,resetPassword};