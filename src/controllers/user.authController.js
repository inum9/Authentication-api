import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../model/user.model.js";



const registerUser= asyncHandler(async(req,res)=>{
      //register the user
        const {username,email,password}=req.body;
      
       
        let existingUser=  await  User.findOne({
                $or:[{email},{password}]
            })
            if(existingUser){
                throw new ApiError(401,"user is existed");
            }

         let user= await  User.create({username,email,password});
         if(!user){
            throw new ApiError(401,"user is not created!!");

         }
            let createdUser=  await  User.findById(user._id).select(
                "-password"
              );
           
            return res.status(200).json(new ApiResponse(200,createdUser,"user is registered!"));
       
        



});

export{registerUser};