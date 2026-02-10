// app/api/nepse/top-gainers/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://nepseapi.surajrimal.dev/TopGainers");
  const data = await res.json();
  return NextResponse.json(data);
}
