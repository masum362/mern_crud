import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connection from "./database/db.js"
import router from "./routes/pages.js";

dotenv.config();

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended :false }));
app.use(express.json());
app.use("/",router)





const PORT = 2001

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

connection(username,password )

app.listen(PORT , (req,res)=>{

    console.log(`server listening on port ${PORT}`);

})