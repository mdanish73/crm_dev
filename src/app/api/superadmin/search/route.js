import dbConnection from "@/backend/db/dbconnection";
import superAdminmodel from "@/backend/models/admins/superadmin";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnection();

  try {
    const data = await req.json();
    const { username } = data; 
    const result = await superAdminmodel.find({ username });
    console.log(result)
    return NextResponse.json({
      message: "Success",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error.message); 
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    ); 
  }
}
