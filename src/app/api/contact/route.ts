import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    if (!body.email || !body.message || !body.topic) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Mock response for the implementation.
    console.log("Contact form submission received:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
