// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { clientPromise} from "../../lib/mogodb"
import Contact from "@/app/models/Contact";

console.log("API /api/contact file loaded!");

export async function POST(req: Request) {
  console.log("API /contact POST called");

  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { firstName, lastName, email } = body;
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone: body.phone || "",
      company: body.company || "",
      message: body.message || "",
    });

    console.log("Saved contact:", contact);

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to submit. Check server logs." },
      { status: 500 }
    );
  }
}
