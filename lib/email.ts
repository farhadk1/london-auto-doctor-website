import nodemailer from 'nodemailer';
import { ContactFormData } from './validations';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: parseInt(process.env.SMTP_PORT!),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const emailTemplate = generateEmailTemplate(data);
  
  const mailOptions = {
    from: process.env.SMTP_USER!,
    to: 'info@londonautodoctor.co.uk',
    subject: emailTemplate.subject,
    text: emailTemplate.text,
    html: emailTemplate.html,
  };

  return await transporter.sendMail(mailOptions);
}

function generateEmailTemplate(data: ContactFormData) {
  const urgencyEmoji = data.urgency === 'emergency' ? '🚨' : '🔧';
  const subject = `${urgencyEmoji} New Service Request from ${data.name}`;
  
  const text = `
New Service Request Details:

CUSTOMER INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Preferred Contact: ${data.preferredContact}

VEHICLE INFORMATION:
Make: ${data.vehicleMake}
Model: ${data.vehicleModel}
Year: ${data.vehicleYear}

SERVICE DETAILS:
Service Required: ${data.service}
Urgency Level: ${data.urgency}
Issue Description: ${data.issue}

RESPONSE PRIORITY: ${data.urgency === 'emergency' ? 'IMMEDIATE' : data.urgency === 'within-24h' ? 'HIGH' : 'NORMAL'}

--
Submitted via London Auto Doctor Website
Timestamp: ${new Date().toLocaleString('en-GB')}
  `;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #ff6b35; margin-bottom: 20px; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">
          ${urgencyEmoji} New Service Request
        </h1>
        
        <div style="margin-bottom: 25px;">
          <h2 style="color: #333; font-size: 18px; margin-bottom: 15px;">Customer Information</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
          </div>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #333; font-size: 18px; margin-bottom: 15px;">Vehicle Information</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p><strong>Vehicle:</strong> ${data.vehicleMake} ${data.vehicleModel} (${data.vehicleYear})</p>
          </div>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #333; font-size: 18px; margin-bottom: 15px;">Service Details</h2>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p><strong>Service Required:</strong> ${data.service}</p>
            <p><strong>Urgency Level:</strong> <span style="color: ${data.urgency === 'emergency' ? '#dc3545' : data.urgency === 'within-24h' ? '#fd7e14' : '#28a745'}; font-weight: bold;">${data.urgency.toUpperCase()}</span></p>
            <p><strong>Issue Description:</strong></p>
            <div style="background-color: white; padding: 10px; border-left: 4px solid #ff6b35; margin-top: 10px;">
              ${data.issue}
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d; font-size: 14px;">
          <p>Submitted via London Auto Doctor Website</p>
          <p>Timestamp: ${new Date().toLocaleString('en-GB')}</p>
        </div>
      </div>
    </div>
  `;

  return { subject, text, html };
}