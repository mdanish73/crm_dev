import { cookies } from "next/headers";
import { tokenVerification } from "./helper/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = cookies().get("AccessToken");
  const verified = await tokenVerification(token?.value);

  const loginRoute = "/login";
  const dashboardRoute = "/dashboard";

  // If the user is trying to access a protected route without a verified token, redirect to login
  if (!verified && !req.nextUrl.pathname.startsWith(loginRoute)) {
    return NextResponse.redirect(new URL(loginRoute, req.url));
  }

  // If the user is trying to access the login page while authenticated, redirect to dashboard
  if (verified && req.nextUrl.pathname.startsWith(loginRoute)) {
    return NextResponse.redirect(new URL(dashboardRoute, req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/profile/:path*"],
};
