import nodemailer from "nodemailer";

if (
  !process.env.MAILTRAP_HOST ||
  !process.env.MAILTRAP_PORT ||
  !process.env.MAILTRAP_USER ||
  !process.env.MAILTRAP_PASS
) {
  throw new Error("Missing Mailtrap environment variables");
}

export const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,          // sandbox.smtp.mailtrap.io
  port: Number(process.env.MAILTRAP_PORT),  // 2525
  secure: false,                            // MUST be false for Mailtrap
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // prevents silent TLS failures
  },
});

// Optional but VERY helpful during dev
transporter.verify((error, success) => {
  if (error) {
    console.error(" Mailtrap SMTP error:", error);
  } else {
    console.log(" Mailtrap SMTP is ready to send emails",success);
  }
});
