import express from "express";
import { Register, Signin, verifyEmail } from "../controllers/userController.js";

const userRoute = express.Router()

userRoute.post("/register",Register)
userRoute.post('/verifyemail',verifyEmail)
userRoute.post('/signin',Signin)
export default userRoute