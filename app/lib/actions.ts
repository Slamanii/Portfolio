"use server";

import { Resend } from "resend";

const TO_EMAIL = "adrianovwigho06@gmail.com";
const FROM_EMAIL = "Portfolio <onboarding@resend.dev>";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks — I'll get back to you soon." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }

  if (message.length > 5000) {
    return { status: "error", message: "Message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      status: "error",
      message: "Something went wrong on my end — email me directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Couldn't send that — email me directly instead.",
      };
    }

    return { status: "success", message: "Sent — I'll get back to you soon." };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      status: "error",
      message: "Couldn't send that — email me directly instead.",
    };
  }
}
