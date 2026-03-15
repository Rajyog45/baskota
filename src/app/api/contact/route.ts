import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mogodb";
import Contact from "@/app/models/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();

    const { firstName, lastName, email, phone, company, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect MongoDB  
    await connectDB();

    // Save to MongoDB
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    });

    // Send Email Notification
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL as string,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}