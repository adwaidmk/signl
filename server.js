const express=require("express")
const mongoose=require("mongoose")
const routesUrls=require("./routes/routes")
const app=express()
const port =process.env.PORT|| 5000
const dotenv=require("dotenv")
const cors=require("cors")
const cookieParser=require("cookie-parser")

dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS,{},()=>{console.log("database connected")})


//Base path
app.use(express.urlencoded({extended:false}))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
//app.use(cookieParser());
    app.use('/app',routesUrls)
    app.listen(port,console.log({port}))