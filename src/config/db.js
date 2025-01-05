import mongoose from "mongoose";
import { dbName } from "../../const.js";

const connectDb=async()=>{
  try {
  let connectionInstance= await mongoose.connect(`${process.env.mongoDBUri}/${dbName}`);
  console.log(`mongodb is connected at ${connectionInstance.connection.host}`);
  
      
  } catch (error) {
    console.log(`error happent at mongoDb ${error}`);
    
  }
}

export {connectDb};