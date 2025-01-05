import mongoose from "mongoose";
import bcryt from "bcrypt"
import jwt from "jsonwebtoken";
;const userSchema= new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User= mongoose.model("user",userSchema);


/// setting the encryption for password
userSchema.pre("save",async(next)=>{
try {
            if(!this.isModified("password")) return next();
          this.password= await bcryt.hash(this.password,10);

          next();
} catch (error) {
    console.log(`error occure in encrypting the password ${error}`);
}
});
// userSchema.methods.isPasswordCorrect=async function(password){
//    const isMatch= await bcryt.compare(password,this.password);
//    return isMatch;

// }


//generating the token
// userSchema.methods.generatingToken=function(){
//     return jwt.sign({
//         _id:this._id,
//         email:this.email,
//         password:this.password,
//         username:this.username
//     },
//     process.env.jwtToken,
//     {
//             expiresIn:process.env.jwtExpiry
//     }
// )

export{User};