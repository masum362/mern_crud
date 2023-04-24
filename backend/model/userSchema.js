import mongoose from "mongoose";
// import {v4 as uuidv4} from "uuid"


const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String
})

const User = mongoose.model("user", userSchema)


export default User;