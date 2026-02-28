import { transporter } from "./emailConfig.js";
import { Verification_Email_Template, Welcome_Email_Template } from "./emailTemplate.js";


export const sendVerificationCode = async(email,verificationCode)=>{
    try{
        const info = await transporter.sendMail({
        from: '"Vivek Coderz" <krviivek@gmail.com>',
        to: email,
        subject: "Verify your email ✔",
        text: "Hello world?", // Plain-text version of the message
        html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // HTML version of the message
    });

    console.log("Message sent:", info);
    }catch(error){
        console.log(error);
        
    }
}

export const welcomeEmail = async(email,name)=>{
    try{
        const info = await transporter.sendMail({
        from: '"Vivek Coderz" <krviivek@gmail.com>',
        to: email,
        subject: "Verify your email ✔",
        text: "Welcome Email", // Plain-text version of the message
        html: Welcome_Email_Template.replace("{name}",name), // HTML version of the message
    });

    console.log("Message sent:", info);
    }catch(error){
        console.log(error);
        
    }
}