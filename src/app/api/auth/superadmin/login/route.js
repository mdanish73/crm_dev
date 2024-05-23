import dbConnection from "@/backend/db/dbconnection";
import superAdmin from "@/backend/models/admins/superadmin";
import { tokenGenerator } from "@/helper/jwt";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Connect The DataBase
dbConnection();
// Starting EndPoint For Login SuperAdmin
const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const foundByemail = await superAdmin.findOne({ email });
    const passwordCompare = await bcrypt.compare(
      password,
      foundByemail.password
    );
    if (!foundByemail || !passwordCompare) {
      return NextResponse.json({
        message: "Email or Password Invalid",
        success: false,
      });
    }
    const data = {
      _id: foundByemail._id,
      email: foundByemail.email,
    };
    // Generate The Token
    const token = await tokenGenerator(data);
    // Handle Expiration Time Of Token
    const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
    // Use cookie function of Nextjs App Router
    const cookie = cookies();
    cookie.set("AccessToken", token, {
      httpOnly: true,
      path: "/",
      secure: true,
      expires: expirationTime,
    });
    return NextResponse.json(
      {
        message: "You LoggedIn!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};
export { POST };
