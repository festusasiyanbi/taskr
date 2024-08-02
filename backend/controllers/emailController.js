const nodemailer = require('nodemailer');
require('dotenv').config();

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
        to: [
            'festusasiyanbi80@gmail.com',
            'ayowolemieniomosule@gmail.com',
            'wudkevin@icloud.com',
            'jenniferjude4@gmail.com',
            'gessia.cm@gmail.com'
        ],
        subject: `New Contact Form Submission from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error sending email.' });
    }
};

module.exports = { sendEmail };
