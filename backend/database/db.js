import mongoose from "mongoose";

const connection = async (URL) => {

    try {

      await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
      console.log("database connection established")

        
    } catch (error) {
        console.log(`erorr while db connection` , error)
        
    }
}


export default connection;