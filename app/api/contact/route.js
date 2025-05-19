import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

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
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
        <!-- Header -->
        <div style="background-color: #2563eb; padding: 24px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
            </h1>
        </div>

        <!-- Content -->
        <div style="padding: 32px 24px;">
            <!-- Sender Info -->
            <div style="margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600;">
                    You've received a new message from your portfolio website
                </h2>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <p style="margin: 0;">
                        <strong style="color: #64748b; min-width: 80px; display: inline-block;">Name:</strong>
                        <span style="color: #334155;">${name}</span>
                    </p>
                    <p style="margin: 0;">
                        <strong style="color: #64748b; min-width: 80px; display: inline-block;">Email:</strong>
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                    </p>
                    <p style="margin: 0;">
                        <strong style="color: #64748b; min-width: 80px; display: inline-block;">Date:</strong>
                        <span style="color: #334155;">${new Date().toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}</span>
                    </p>
                </div>
            </div>

            <!-- Message -->
            <div style="border-top: 1px solid #e2e8f0; padding-top: 24px;">
                <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                    Message Content:
                </h3>
                <div style="background-color: #f8fafc; padding: 16px; border-radius: 4px;">
                    <p style="margin: 0; line-height: 1.5; color: #334155;">${message.replace(
                      /\n/g,
                      "<br>"
                    )}</p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 16px 24px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #64748b;">
                This message was sent via the contact form on your portfolio website.
                <br>
                Please do not reply directly to this automated message.
            </p>
        </div>
    </div>
</body>
</html>
`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
