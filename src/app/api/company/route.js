import dbConnection from "@/backend/db/dbconnection";
import compnayModel from "@/backend/models/company";
import { NextResponse } from "next/server";

async function POST(req) {
  await dbConnection();
  try {
    const body = await req.json();
    console.log(body,"from 9 line");
    const data = await compnayModel.create(body);
    return NextResponse.json({
      message: "Company Created!",
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error, "Error From POST API");
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
}

export { POST };
