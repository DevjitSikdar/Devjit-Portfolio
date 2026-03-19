import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = contactSchema.parse(body);

        // Configure your email transport
        // For production, use environment variables:
        // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USER || "noreply@example.com"}>`,
            to: process.env.CONTACT_EMAIL || "devjit@example.com",
            replyTo: validatedData.email,
            subject: `Portfolio Contact: ${validatedData.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #FF2E2E; border-bottom: 2px solid #FF2E2E; padding-bottom: 10px;">
            New Contact Message
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 8px;">
              ${validatedData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Sent from your portfolio website
          </p>
        </div>
      `,
        };

        // Only send email if SMTP credentials are configured
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            // Log to console for development
            console.log("📧 Contact form submission (email not configured):");
            console.log("Name:", validatedData.name);
            console.log("Email:", validatedData.email);
            console.log("Message:", validatedData.message);
        }

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Invalid form data", details: error.issues },
                { status: 400 }
            );
        }
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
