const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS package


const app = express();


app.use(bodyParser.json());

// Enable CORS for all origins (or specify your origin explicitly)
app.use(cors());  // Allow all domains for now (for development purposes)

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transport (using Gmail as an example)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mrsachinchaurasiya@gmail.com', // Replace with your email
            pass: 'autz fsqf mhjh eysa' // Replace with your email password or app-specific password
        }
    });

    // Email options
    const mailOptions = {
        from: 'mrsachinchaurasiya@gmail.com',
        to: 'sachinchaurasiya69@gmail.com', // The email address where you want to receive the message
        subject: `Contact Us Form Submission from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
