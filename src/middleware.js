import { cookies } from "next/headers";
import { tokenVerification } from "./helper/jwt";
import { NextResponse } from "next/server";

// Function of Middleware
export async function middleware(req) {
  // 1:- We Get The Cookies
  const token = cookies().get("AccessToken");

  // 2:- We Verify The Cookies
  const verified = await tokenVerification(token?.value);

  // 3:- The Login Route is Public
  const loginRoute = "/login";

  // 4:-The Dashboard route is Private
  const dashboardRoute = "/dashboard";

  // 5:- Destructure The pathname from req.Nexturl
  const { pathname } = req.nextUrl;

  // 6:- For Security Purpose all APIs Route is private only the login API is public
  if (pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  // 7:- If the cookies is not verified and the user pathname not login redirect to login page
  if (!verified && !pathname.startsWith(loginRoute)) {
    return NextResponse.redirect(new URL(loginRoute, req.url));
  }

  // If the cookies is verified and user pathname is login redirect to dashboard
  if (verified && pathname.startsWith(loginRoute)) {
    return NextResponse.redirect(new URL(dashboardRoute, req.url));
  }
}
// write the paths the middleware run
export const config = {
  matcher: [
    "/dashboard",
    "/profile/:path*",
    "/login",
    "/api/:path*",
    "/companies/:path*",
    "/industries/:path*",
  ],
};
