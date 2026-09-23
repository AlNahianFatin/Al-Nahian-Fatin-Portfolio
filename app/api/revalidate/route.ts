// import { NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";

// export async function POST(req: Request) {
//   const secret = process.env.REVALIDATE_SECRET;

//   if (!secret) {
//     return NextResponse.json(
//       { message: "Revalidation is not configured." },
//       { status: 500 }
//     );
//   }

//   const authHeader = req.headers.get("authorization");

//   if (!authHeader?.startsWith("Bearer ")) {
//     return NextResponse.json(
//       { message: "Unauthorized" },
//       { status: 401 }
//     );
//   }

//   const token = authHeader.slice(7);

//   if (token !== secret) {
//     return NextResponse.json(
//       { message: "Unauthorized" },
//       { status: 401 }
//     );
//   }

//   try {
//     // Revalidate the root layout and everything underneath it
//     revalidatePath("/", "layout");

//     return NextResponse.json({
//       revalidated: true,
//       path: "/",
//       now: Date.now(),
//     });
//   } catch (error) {
//     console.error("Portfolio revalidation error:", error);

//     return NextResponse.json(
//       { message: "Failed to revalidate portfolio." },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";

// export async function POST(req: Request) {
//   const secret = process.env.REVALIDATE_SECRET;

//   if (!secret) {
//     return NextResponse.json(
//       { message: "Revalidation is not configured." },
//       { status: 500 }
//     );
//   }

//   const authHeader = req.headers.get("authorization");

//   if (!authHeader?.startsWith("Bearer ")) {
//     return NextResponse.json(
//       { message: "Unauthorized" },
//       { status: 401 }
//     );
//   }

//   const token = authHeader.slice(7);

//   if (token !== secret) {
//     return NextResponse.json(
//       { message: "Unauthorized" },
//       { status: 401 }
//     );
//   }

//   try {
//     // Revalidate the root layout and everything underneath it
//     revalidatePath("/", "layout");

//     return NextResponse.json({
//       revalidated: true,
//       path: "/",
//       now: Date.now(),
//     });
//   } catch (error) {
//     console.error("Portfolio revalidation error:", error);

//     return NextResponse.json(
//       { message: "Failed to revalidate portfolio." },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";

// The portfolio's data (getPortfolio) now reads directly from the DB on
// every request via unstable_noStore, so there's no server-side cache left
// to invalidate here. This endpoint is kept so the dashboard's existing
// "notify portfolio of an update" call still has something to hit (and so
// we can add caching back behind this same contract later if needed).
export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    console.error("REVALIDATE_SECRET is missing");

    return NextResponse.json(
      {
        message: "Revalidation is not configured.",
      },
      {
        status: 500,
      }
    );
  }

  const authHeader = req.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const token = authHeader.slice(7);

  if (token !== secret) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}