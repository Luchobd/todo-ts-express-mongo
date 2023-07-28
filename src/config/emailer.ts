import nodemailer from "nodemailer";
import "dotenv/config";
import { emailTemplate } from "../utils/email/template";
import { EmailUser } from "../interfaces/email.interface";

export async function sendEmail({ type, name, email, key }: EmailUser) {
  const transporter = nodemailer.createTransport({
    host: process.env.SERVICE_HOST,
    port: +process.env.SERVICE_PORT!,
    secure: false,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  });

  const { html, subject } = emailTemplate({ type, name, email, key });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: subject,
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    // console.log(info)
    return true;
  } catch (error: unknown) {
    console.log(error)
    return false;
  }
}
