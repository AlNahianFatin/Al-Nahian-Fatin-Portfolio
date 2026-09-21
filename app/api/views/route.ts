import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

  const userAgent = req.headers.get("user-agent") || "";

  const ipHash = ip ? crypto.createHash("sha256").update(ip).digest("hex") : null;

  await prisma.view.create({ data: { ipHash, userAgent } });

  return NextResponse.json({ ok: true });
}
