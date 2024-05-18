import dbConnection from "@/backend/db/dbconnection";
import cities from "@/backend/models/cities/cities";
import cityNames from "@/backend/models/cities/cityNames";
import { NextResponse } from "next/server";

dbConnection();
const POST = async (req) => {
  try {
    const body = await req.json();
    const createdCity = await cities.create(body);
    return NextResponse.json({
      message: "City Created",
      success: true,
      data: createdCity,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export { POST };
