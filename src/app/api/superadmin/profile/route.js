import dbConnection from "@/backend/db/dbconnection";
import superAdmin from "@/backend/models/admins/superadmin";
import { tokenVerification } from "@/helper/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// Connect the DataBase
dbConnection();

// End Point to fetch the SuperAdmin when he login the token generate we get the ID from the token and give to mongodb to fetch superAdmin
const GET = async () => {
  try {
    const cookie = cookies();
    const token = cookie.get("AccessToken");
    const isVerified = await tokenVerification(token.value);
    if (isVerified) {
      const id = isVerified._id;
      const user = await superAdmin.findById(id);
      return NextResponse.json({
        message: "Token is valid",
        success: true,
        data: user,
      });
    } else {
      return NextResponse.json({
        message: "Token is invalid",
        success: false,
      });
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export { GET };
