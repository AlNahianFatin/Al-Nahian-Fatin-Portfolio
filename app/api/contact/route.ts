import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";
import { sendNewMessageMail } from "../../../lib/mail";

const schema = z.object({
  gmail: z
    .string("Please provide your Gmail")
    .email("Please enter a valid Gmail"),
  message: z
    .string("Please enter your message")
    .min(5, "Message must be at least 5 characters long")
    .max(5000, "Message must be within 5000 characters")
});

export async function POST(req: Request) {
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success)
      return NextResponse.json({
        message: "Please provide a valid Gmail and message."
      }, { status: 400 });

    const saved = await prisma.message.create({ data: parsed.data });

    try {
      await sendNewMessageMail(saved.gmail, saved.message);
    }
    catch (mailError) {
      console.error("SMTP error:", mailError);
    }

    return NextResponse.json({ message: "Message received successfully. Thank you!" });
  }
  catch {
    return NextResponse.json({ message: "Unable to send your message right now." }, { status: 500 });
  }
}
