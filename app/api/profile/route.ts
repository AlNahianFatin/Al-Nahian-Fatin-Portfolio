// app/api/profile/route.ts

import { NextResponse } from "next/server";
import { getPortfolio } from "../../../services/getPortfolio";
// import { getPortfolio } from "../../../lib/portfolio";

export async function GET() {
  try {
    const data = await getPortfolio();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to load portfolio data" },
      { status: 500 }
    );
  }
}