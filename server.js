const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password or app-specific password
    },
});

app.post('/send-email', async (req, res) => {
   
    const { fullname, email, phone, message } = req.body;

    try {
        await transporter.sendMail({
            from: '"Enquiry Form" <your-email@gmail.com>',
            to: 'recipient-email@gmail.com', // Replace with the recipient's email
            subject: 'New Enquiry Received',
            text: `Full Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        });

        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to send email' });
    }
});

app.get('/f', (req, res) => {
    res.send('Welcome to the Express server');
});

app.listen(5500, () => {
    console.log('Server is running on http://localhost:5500');
});
