import nodemailer from 'nodemailer';
import { ReviewModel } from '../models/model.js';

export const ReceiveMail = async (req, res)=>{
    const { name, email, message } = req.body;

  try {
    // Set up Nodemailer with your Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,  // your Gmail address
        pass: process.env.GMAIL_PASS,  // your Gmail app password (not regular Gmail password)
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email,  // Sender's email 
      to: process.env.RECEIVER_EMAIL,  // Your personal email
      subject: `New contact form submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });
    console.log('GMAIL_PASS:', process.env.RECEIVER_EMAIL);      
    res.status(200).json({ message: 'Email sent successfully!' }); 
  } catch (error) {
    console.error('Error sending email:', error);
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

    res.status(500).json({ message: 'Error sending email', error });
  }
}

export const Review = async (req, res) => { 
  try {
    const {name, company, message} = req.body
    if (!name || !company || !message) {
      throw new Error("All fields are required");  
  }
    const newReview = new ReviewModel({name, company, message, createdAt: new Date()})
    await newReview.save()
    res.status(200).send({
      message: 'Submitted Successfully'
    })
  } catch (error) { 
    console.error(error)
    res.status(400).send({
      message: error.message
    })
  }
} 