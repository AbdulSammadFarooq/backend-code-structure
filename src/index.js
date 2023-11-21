import express, { urlencoded } from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config({path:"./.env"})
const app = express()

app.use(cors({origin:process.env.CORS_ORIGIN,credentials:true}))
app.use(express.json({limit:"16kb",}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// db connection
connectDB()


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`)
})