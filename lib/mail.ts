import { getPortfolio } from "../services/getPortfolio";
import path from "path";
import ejs from "ejs";
import { transporter } from "./nodemailer";

export async function sendNewMessageMail(gmail: string, message: string) {
  try {
    const year = new Date().toLocaleDateString().split("/")[2];

    const user = await getPortfolio();

    const recipient = user.profile?.email ?? process.env.USER_EMAIL;

    if (!recipient)
      return;

    const templatePath = path.join(
      process.cwd(),
      "templates/message-received-email.ejs",
    );

    const templateData = {
      gmail,
      message,
      year,
      user: user.profile?.name,
    };

    const html = await ejs.renderFile(templatePath, templateData);

    await transporter.sendMail({
      from: process.env.SMTP_USER || process.env.EMAIL_SENDER,
      to: recipient,
      subject: `New portfolio message from ${gmail}`,
      html,
    });
  } catch (error) {
    console.log(error);
  }
}
