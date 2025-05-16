require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(bodyParser.json());

// Create reusable transporter object using Ethereal test SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  }
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Contact Form API</h1>
    <p>Server is running in ${process.env.NODE_ENV} mode
    on ${process.env.FRONTEND_URL}</p>
    <p>Use POST /api/contact to submit form</p>
  `);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email using Ethereal
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Appointment request from: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2d3748;">New Appointment Request from ${name}</h2>
          <table style="width: 100%; border-collapse: collapse; text-color: #ffffff;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${phone}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #718096; font-size: 0.9em;">
            Sent from your website contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      headers: {
        'X-ElasticEmail-Priority': '1', // High priority
        'X-ElasticEmail-TrackOpens': 'true',
        'X-ElasticEmail-TrackLinks': 'true',
        'X-ElasticEmail-Track': 'true'
      }
    });

    await transporter.sendMail(info);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Send error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});