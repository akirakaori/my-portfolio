import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonResponse(message: string, status: number, success = false) {
  return NextResponse.json({ success, message }, { status });
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return jsonResponse("Invalid request body.", 400);
  }

  const name = cleanField(body.name);
  const email = cleanField(body.email);
  const subject = cleanField(body.subject);
  const message = cleanField(body.message);

  if (!name) {
    return jsonResponse("Name is required.", 400);
  }

  if (!email || !emailPattern.test(email)) {
    return jsonResponse("A valid email address is required.", 400);
  }

  if (!subject) {
    return jsonResponse("Subject is required.", 400);
  }

  if (!message) {
    return jsonResponse("Message is required.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.");
    return jsonResponse("Something went wrong. Please try again.", 500);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact form error:", error);
      return jsonResponse("Something went wrong. Please try again.", 500);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return jsonResponse("Something went wrong. Please try again.", 500);
  }
}
