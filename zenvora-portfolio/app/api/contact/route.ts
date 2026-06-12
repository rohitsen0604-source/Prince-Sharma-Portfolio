import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      category,
      message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Zenvora Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `New Contact Inquiry - ${category}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Company:</strong> ${company || "Not Provided"}</p>
        <p><strong>Category:</strong> ${category}</p>

        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER?.trim(),
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL?.trim(),
    pass: process.env.SMTP_PASSWORD?.trim(),
  },
});