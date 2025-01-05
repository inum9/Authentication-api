import { Router } from "express";
import { registerUser } from "../controllers/user.authController.js";
import { logInUser } from "../controllers/user.loginAuth.controller.js";
import { verifyAuth } from "../utils/AuthMiddleware.js";
import { logOutuser } from "../controllers/logOutAuth.js";
import { RootNodesUnavailableError } from "redis";
import { ApiResponse } from "../utils/apiResponse.js";
const rooot= Router();

rooot.route("/register").post(registerUser);
rooot.route("/login").post(logInUser);
//protected rout
rooot.route("/protected").get(verifyAuth,(req,res)=>{
    res.status(200).json({Message:"this is protected route",user:req.user});
})
rooot.route("/logout").post(logOutuser);
export {rooot};