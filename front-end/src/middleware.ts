import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const sessionCookie = req.cookies.get("next-auth.session-token");

  if (req.nextUrl.pathname.startsWith("/backoffice")) {
    if (!sessionCookie) {
      // return NextResponse.rewrite("/login");
    }
  }
}
