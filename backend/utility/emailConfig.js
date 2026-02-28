import nodemailer from "nodemailer";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "krviivek@gmail.com",
    pass: "wmko obqn atuk vcce",
  },
});

// Send an email using async/await
// const sendEmail =async () => {
//     try{
//         const info = await transporter.sendMail({
//         from: '"Vivek Coderz" <krviivek@gmail.com>',
//         to: "vivekkumardhnairtel@gmail.com",
//         subject: "Hello ✔",
//         text: "Hello world?", // Plain-text version of the message
//         html: "<b>Hello world?</b>", // HTML version of the message
//     });

//     console.log("Message sent:", info.messageId);
//     }catch(error){
//         console.log(error);
        
//     }
  
// };

// sendEmail()