import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!resend) {
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { 
          success: true, 
          message: "Message received! (Demo mode - Resend not configured)"
        },
        { status: 200 }
      );
    }

    const contactTo = process.env.CONTACT_TO || "moulisai2109@gmail.com";
    const contactFrom = process.env.CONTACT_FROM || "portfolio@yourdomain.com";

    await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
