import mongoose from "mongoose";

const connection = async(url) =>{
    const URL = url;
    try {
       await mongoose.connect(URL,{
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
        console.log('database connection successfully')
    } catch (error) {
        console.log('database connection error' + error)
        
    }
}

export default connection;