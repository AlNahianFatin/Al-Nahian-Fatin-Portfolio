import nodemailer from "nodemailer";

const host = "smtp.gmail.com";

export const transporter = nodemailer.createTransport({
  host,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

export async function sendNewMessageMail(gmail: string, message: string) {
  const recipient = process.env.USER_EMAIL;

  if (!recipient)
    return;

  await transporter.sendMail({
    from: process.env.EMAIL_SENDER || process.env.SMTP_USER,
    to: recipient,
    replyTo: gmail,
    subject: `New portfolio message from ${gmail}`,
    text: `A new message was received.\n\nFrom: ${gmail}\n\n${message}`
  });
}
