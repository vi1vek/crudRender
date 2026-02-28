import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import { sendVerificationCode, welcomeEmail } from "../utility/email.js";

export const Register = async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({success:false,message:"All fields required"})
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({success:false,message:"User All ready exist. Please Login"})
        }
        const hashPass = await bcrypt.hash(password,10)
        const verficationCode = Math.floor(100000 + Math.random() * 900000).toString()
        const newUser= new User({name,email,password:hashPass,verficationCode})
        await newUser.save();
        await sendVerificationCode(newUser.email,newUser.verficationCode)
        return res.status(201).json({success:true,message:"User Register successfully"})
    }catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}

export const verifyEmail = async(req,res)=>{
    try{
        const {code}=req.body
        const findUser = await User.findOne({verficationCode:code})
        if(!findUser){
            return res.status(400).json({success:false,message:"Invalid or Expired Code"})
        }
        findUser.isVerified = true
        findUser.verficationCode = undefined
        await findUser.save()
        await welcomeEmail(findUser.email,findUser.name)
        return res.status(201).json({success:true,message:"OTP Verified successfully.."})
    }catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}

export const Signin = async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({success:false,message:"All fields required"})
        }
        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(400).json({success:false,message:"User Not Found. Please Signup First"})
        }
        if(!existingUser.isVerified){
            return res.status(400).json({success:false,message:"First Verify Your Otp"})
        }
        const isMatched = await bcrypt.compare(password,existingUser.password)
        if(!isMatched){
            return res.status(400).json({success:false,message:"Invalid Credintials"})
        }
        
        await existingUser.save();
        
        return res.status(201).json({success:true,message:"User Login successfully"})
    }catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}