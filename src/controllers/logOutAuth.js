import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const logOutuser= asyncHandler(async(req,res)=>{
  
        return res.status(200).json(new ApiResponse(200,"user loggedout please clean the token on client side"));
      
});
export {logOutuser};