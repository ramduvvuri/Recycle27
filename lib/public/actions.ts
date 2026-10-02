"use server";

import type { ActionResult } from "@/types";

// ─── Contact form ─────────────────────────────────────────────────────────────
import nodemailer from "nodemailer";

export async function submitContactInquiry(
  _: ActionResult | undefined,
  form: FormData
): Promise<ActionResult> {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !subject || !message)
    return { error: "All fields are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Please enter a valid email address." };
  if (message.length < 10)
    return { error: "Message must be at least 10 characters." };

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || '"ReCYCLE 2027" <noreply@iitg.ac.in>',
      to: ["recycle2k27@gmail.com", "recycle2k27@iitg.ac.in"].join(", "),
      replyTo: email,
      subject: `[ReCYCLE 2027 Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send message. Please try again later." };
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
  
  if (!author_name || !author_email || !affiliation || !abstract_title || !theme)
    return { error: "All required fields must be filled." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author_email))
    return { error: "Please enter a valid email address." };

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

  if (!full_name || !email || !institution || !category)
    return { error: "All required fields must be filled." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Please enter a valid email address." };

  console.log("Mock submission for Registration:", { full_name, email, category });
  return { success: true };
}
