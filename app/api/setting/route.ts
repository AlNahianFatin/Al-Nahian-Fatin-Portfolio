import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const data = await prisma.portfolioSetting.findMany();

    return NextResponse.json(Object.fromEntries(
      data.map(s => [s.key, s.value])
    ));
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to load portfolio data" },
      { status: 500 }
    );
  }
}
