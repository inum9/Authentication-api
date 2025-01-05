import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDb } from "./src/config/db.js";
const port=process.env.PORT||8000
dotenv.config({
    path:"./.env"
})

connectDb().then(
    ()=>{
        app.listen(port,()=>{
            console.log(`server is running on port : ${port}`);
            
        })
    }
);