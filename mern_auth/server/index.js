import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/Router.js'
import connection from './database/connection.js';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express()
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));


app.use('/',router)
app.use('/uploads', express.static('./uploads'));



const PORT = process.env.PORT;
const url = process.env.DB_URL;



connection(url);

app.listen((PORT),(req,res)=>{
    console.log(`server listening on port ${PORT}`)
})