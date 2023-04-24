import mongoose from "mongoose";

const connection = async (username,password) => {


    const URL = `mongodb+srv://${username}:${password}@cluster0.8iqndoh.mongodb.net/test

    `
    try {

      await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
      console.log("database connection established")

        
    } catch (error) {
        console.log(`erorr while db connection` , error)
        
    }
}


export default connection;