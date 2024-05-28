import { cookies } from "next/headers";
import { tokenVerification } from "./helper/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = cookies().get("AccessToken");
  const verified = await tokenVerification(token?.value);

  const loginRoute = "/login";
  const dashboardRoute = "/dashboard";

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  if (!verified && !pathname.startsWith(loginRoute)) {
    return NextResponse.redirect(new URL(loginRoute, req.url));
  }

  if (verified && pathname.startsWith(loginRoute)) {
    return NextResponse.redirect(new URL(dashboardRoute, req.url));
  }

}

export const config = {
  matcher: ["/dashboard","/profile/:path*","/login", "/api/:path*"],
};
