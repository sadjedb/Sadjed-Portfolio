import nodemailer from "nodemailer";

class ContactService {
  async sendContactEmail({ name, email, message }) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: {
        name: `${name} (via Portfolio Contact Form)`,
        address: process.env.EMAIL_USER,
      },
      to: "sadjedbougandoura@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: this._buildHtmlTemplate(name, email, message),
    };

    await transporter.sendMail(mailOptions);
  }

  _buildHtmlTemplate(name, email, message) {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #2563eb; padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
    </div>
    <div style="padding: 24px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
    <div style="background-color: #f1f5f9; padding: 16px; text-align: center;">
      <small>This message was sent from your portfolio contact form.</small>
    </div>
  </div>
</body>
</html>
    `;
  }
}

export default ContactService;
