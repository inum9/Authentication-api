import jwt from "jsonwebtoken";
import { asyncHandler } from "./asyncHandler.js";
import { ApiError } from "./apiError.js";
import { User } from "../model/user.model.js";
import { ApiResponse } from "./apiResponse.js";



const verifyAuth=asyncHandler(async (req,res,next)=>{
    const token =  req.header('Authorization');
  
    if(!token){
      throw new ApiError(401,"token is not authorized!");
    }
   
      try {
          const decodeToken= jwt.verify(token,process.env.jwtToken);
          if(!decodeToken){
            throw new ApiError(402,"token is not decoded!");
          }
          req.user= decodeToken;
          next();
      } catch (error) {
        console.log(`erorr ${error}`);
        
      }
    
     
    
});


export { verifyAuth };