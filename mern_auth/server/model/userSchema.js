import mongoose from "mongoose";
// import validator from 'validator'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be entered"],
    min: [4, "name must be at least 4 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email must be entered"],
    unique: [true, "email must be unique"],
    // validate(value){
    //     if(validator.isEmail(value)){
    //         throw new Error('Please enter a valid email');
    //     }
    // }
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    min: [6, "password must be at least 6 characters"],
    required: [true, "password must be entered"],
  },
  confirm_password: {
    type: String,
    min: [6, "password must be at least 6 characters"],
    required: [true, "password must be entered"],
  },
  // tokens:{
  //     token:{
  //         type:String,
  //         required:true
  //     }
  // }
});

// userSchema.method.generateToken('tokens',function(){

// })

userSchema.pre("save", async function(next){
    const user = this
    user.password = await bcrypt.hash(user.password, 8);
    user.confirm_password = await bcrypt.hash(user.confirm_password, 8);
  next();
});

const userModal = new mongoose.model("users", userSchema);

export default userModal;
