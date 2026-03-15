import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mogodb"; // your existing MongoDB connection
import Subscriber from "@/app/models/Subscriber";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Please enter your email." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
    }

    // Check duplicate
    const existing = await Subscriber.findOne({ email }).lean();
    if (existing) {
      return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
    }

    const created = await Subscriber.create({ email });
    const subscriberObj = { id: created._id.toString(), email: created.email };

    return NextResponse.json(
      { message: "Successfully subscribed to the newsletter!", subscriber: subscriberObj },
      { status: 201 }
    );

  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
  }
}