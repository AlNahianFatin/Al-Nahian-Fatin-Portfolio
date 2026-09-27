import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { sendNewMessageMail } from "../../../lib/mail";
import { revalidateDashboard } from "../../../lib/revalidateDashboard";
import { schema } from "../../../services/messageValidation";

export async function POST(req: Request) {
  try {
    const parsed = schema.safeParse(await req.json());

    if (!parsed.success)
      return NextResponse.json({
        message: "Please provide a valid email and message."
      }, { status: 400 });

    const saved = await prisma.message.create({ data: parsed.data });

    await revalidateDashboard();

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
