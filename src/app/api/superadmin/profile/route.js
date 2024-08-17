import dbConnection from "@/backend/db/dbconnection";
import superAdminmodel from "@/backend/models/admins/superadmin";
import { tokenVerification } from "@/helper/jwt";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

dbConnection();
export async function GET() {
  try {
    const token = cookies().get("AccessToken").value;
    if (!token) {
      return NextResponse.json(
        {
          message: "Token not found",
        },
        {
          status: 404,
        }
      );
    }
    const isVerified = await tokenVerification(token);
    if (!isVerified) {
      return NextResponse.json(
        {
          message: "Token is not Verified",
        },
        {
          status: 404,
        }
      );
    }
    const idChecked = await mongoose.Types.ObjectId.isValid(isVerified._id);
    if (!idChecked) {
      return NextResponse.json({
        message: "ID is not Valid",
        success: false,
      });
    }
    const data = await superAdminmodel.findById(isVerified._id);
    if (Object.keys(data).length === 0 || !data) {
      return NextResponse.json({
        message: "Data not found",
        success: false,
      });
    }
    return NextResponse.json(
      {
        message: data,
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error ",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
