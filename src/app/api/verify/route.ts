import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mogodb";
import Subscription from "@/app/models/subscription";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) return NextResponse.redirect("/?error=invalid");

    await connectDB();

    const record = await Subscription.findOne({ token });
    if (!record) return NextResponse.redirect("/?error=expired");

    record.verified = true;
    record.token = "";
    await record.save();

    // Redirect user to registration page with pre-filled email
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/register?email=${record.email}`);
  } catch (err) {
    console.error("Verification error:", err);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/?error=server`);
  }
}
