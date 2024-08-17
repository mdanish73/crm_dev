import { cookies } from "next/headers";
import { tokenVerification } from "./helper/jwt";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function middleware(req) {
  // const { pathname } = req.nextUrl;
  // const headersList = headers();
  // const auth = headersList.get("authorization");
  // if (pathname.startsWith("/api/") && auth !== process.env.AUTHORIZATION_KEY) {
  //   return NextResponse.json({
  //     message: "Not Authorized",
  //   });
  // }

  // const token = cookies().get("AccessToken");
  // const verified = await tokenVerification(token?.value);

  // // if (
  // //   !verified &&
  // //   !pathname.startsWith("/login") &&
  // //   !pathname.startsWith("/api")
  // // ) {
  // //   return NextResponse.redirect(new URL("/login", req.url));
  // // }
  // if (verified && pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }
}

export const config = {
  matcher: [
    "/dashboard",
    "/profile/:path*",
    "/login",
    "/api/:path*",
    "/companies/:path*",
    "/industries/:path*",
    "/ceo/:path*",
  ],
};
