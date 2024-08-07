import Contact from '../models/contactModel.js';
import { sendEmail } from './emailController.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    console.log('Sending email with the following details:', mailOptions);
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email.', error: error.message });
  }
};
const handleContact = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const contactMessage = new Contact({ name, email, message });
        await contactMessage.save();
        await sendEmail();
        return res.status(200).json({ message: "Your message is successfully sent!", contactMessage });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export { handleContact };