import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv"
import userRoute from "./routes/route.js";
import cors from 'cors'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',userRoute)

const PORT = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("Server set up.")
})
app.listen(PORT,()=>{
    connectDb()
    console.log(`Server is running at port ${PORT}`);
    
})

