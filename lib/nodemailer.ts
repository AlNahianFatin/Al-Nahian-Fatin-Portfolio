import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.smtp_user,
		pass: process.env.smtp_password,
	},
});
