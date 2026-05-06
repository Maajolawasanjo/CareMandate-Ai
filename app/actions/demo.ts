"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

export async function bookDemo(data: { email: string; date: string; time: string }) {
  try {
    const { data: demoRequest, error } = await supabaseAdmin
      .from("demo_requests")
      .insert([
        {
          email: data.email,
          date: data.date,
          time: data.time,
          status: "PENDING",
        },
      ])
      .select()
      .single();

    if (error) throw error;

    // Send an email to the admin
    // In a real application, you would use a real SMTP service (Resend, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "dummy_user",
        pass: process.env.SMTP_PASS || "dummy_pass",
      },
    });

    try {
      await transporter.sendMail({
        from: '"CareMandate System" <system@caremandate.ai>',
        to: "admin@caremandate.ai",
        subject: "New Demo Booking Request",
        text: `New demo booked by ${data.email} for ${data.date} at ${data.time}. Login to admin dashboard to manage.`,
        html: `<p>New demo booked by <b>${data.email}</b> for <b>${data.date}</b> at <b>${data.time}</b>.</p><p>Login to admin dashboard to manage.</p>`,
      });
      console.log("Admin email sent.");
    } catch (error) {
      console.error("Failed to send admin email. Check SMTP credentials.", error);
    }

    revalidatePath("/admin/demos");
    return { success: true, id: demoRequest.id };
  } catch (error) {
    console.error("Failed to book demo:", error);
    return { success: false, error: "Failed to book demo" };
  }
}

export async function grantAccess(demoId: string) {
  try {
    const { data: demo, error } = await supabaseAdmin
      .from("demo_requests")
      .update({ status: "SCHEDULED" })
      .eq("id", demoId)
      .select()
      .single();

    if (error) throw error;

    // Send an email to the user confirming access/schedule
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "dummy_user",
        pass: process.env.SMTP_PASS || "dummy_pass",
      },
    });

    try {
      await transporter.sendMail({
        from: '"CareMandate Admin" <admin@caremandate.ai>',
        to: demo.email,
        subject: "Your CareMandate Demo is Confirmed",
        text: `Hello,\n\nYour demo request for ${demo.date} at ${demo.time} has been confirmed. We look forward to speaking with you!`,
        html: `<p>Hello,</p><p>Your demo request for <b>${demo.date}</b> at <b>${demo.time}</b> has been confirmed.</p><p>We look forward to speaking with you!</p>`,
      });
      console.log("User confirmation email sent.");
    } catch (error) {
      console.error("Failed to send user confirmation email.", error);
    }

    revalidatePath("/admin/demos");
    return { success: true };
  } catch (error) {
    console.error("Failed to grant access:", error);
    return { success: false, error: "Failed to grant access" };
  }
}
