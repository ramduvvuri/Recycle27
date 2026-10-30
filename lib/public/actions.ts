"use server";

import type { ActionResult } from "@/types";
import nodemailer from "nodemailer";

// ─── Contact form ─────────────────────────────────────────────────────────────

export async function submitContactInquiry(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { error: "All fields are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return { error: "Message must be at least 10 characters." };
  }

  const recipients = ["recycle2k27@gmail.com", "recycle2k27@iitg.ac.in"];

  // If SMTP is not configured (e.g. in development or preview environments),
  // log the inquiry and return success so legitimate messages are recorded without crashing.
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.info("[RECYCLE 2027 Contact Inquiry Received - SMTP unconfigured]", {
      name,
      email,
      to: recipients,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });
    return { success: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || `"RECYCLE 2027 Contact" <${process.env.SMTP_USER}>`,
      to: recipients.join(", "),
      replyTo: email,
      subject: `[RECYCLE 2027 Inquiry] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #113224; max-width: 600px;">
          <h2 style="color: #0C5A3D; border-bottom: 2px solid #0C5A3D; padding-bottom: 8px;">New Contact Inquiry — RECYCLE 2027</h2>
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 16px; padding: 14px; background: #f8f7f0; border-left: 4px solid #0C5A3D; border-radius: 4px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; margin: 8px 0 0 0;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #666; margin-top: 24px;">This message was submitted via the RECYCLE 2027 website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to deliver contact inquiry via SMTP:", error);
    return { error: "Failed to send message. Please contact us directly at recycle2k27@iitg.ac.in." };
  }
}

// ─── Abstract submission ──────────────────────────────────────────────────────

export async function submitAbstract(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const author_name = String(form.get("author_name") ?? "").trim();
  const author_email = String(form.get("author_email") ?? "").trim();
  const affiliation = String(form.get("affiliation") ?? "").trim();
  const abstract_title = String(form.get("abstract_title") ?? "").trim();
  const theme = String(form.get("theme") ?? "").trim();
  
  if (!author_name || !author_email || !affiliation || !abstract_title || !theme) {
    return { error: "All required fields must be filled." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author_email)) {
    return { error: "Please enter a valid email address." };
  }

  console.log("Mock submission for Abstract:", { author_name, abstract_title, theme });
  return { success: true };
}

// ─── Event registration ───────────────────────────────────────────────────────

export async function submitRegistration(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const full_name = String(form.get("full_name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const institution = String(form.get("institution") ?? "").trim();
  const category = String(form.get("category") ?? "").trim();

  if (!full_name || !email || !institution || !category) {
    return { error: "All required fields must be filled." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  console.log("Mock submission for Registration:", { full_name, email, category });
  return { success: true };
}
