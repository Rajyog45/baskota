import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

export async function sendEmail(data: ContactEmailData) {
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL as string,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Company:</strong> ${data.company || "N/A"}</p>
      <p><strong>Message:</strong> ${data.message || "N/A"}</p>
    `,
  });
}