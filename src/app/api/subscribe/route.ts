import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mogodb";
import Subscription from "@/app/models/subscription";
import { Resend } from "resend";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    await connectDB();

    // Check if already subscribed
    let existing = await Subscription.findOne({ email });
    if (existing) {
      if (existing.verified) {
        return NextResponse.json({ message: "Email already verified" }, { status: 400 });
      }
      existing.token = crypto.randomBytes(16).toString("hex");
      await existing.save();
    } else {
      existing = await Subscription.create({
        email,
        token: crypto.randomBytes(16).toString("hex"),
      });
    }

    const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/verify?token=${existing.token}`;

    // Send verification email via Resend
    await resend.emails.send({
      from: "v2422483@gmail.com",
      to: email,
      subject: "Confirm your subscription",
      html: `<p>Click below to confirm your email:</p><a href="${verifyUrl}">Verify Email</a>`,
    });

    return NextResponse.json({ message: "Verification link sent to your email." });
  } catch (err) {
    console.error("Subscription error:", err);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
}
