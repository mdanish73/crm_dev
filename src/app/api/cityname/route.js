import dbConnection from "@/backend/db/dbconnection";
import cityNames from "@/backend/models/cities/cityNames";
import { NextResponse } from "next/server";
dbConnection();

const POST = async (req) => {
  try {
    const body = await req.json();
    const createdCityname = await cityNames.create(body);
    return NextResponse.json({
      message: "cityName Created",
      success: true,
      data: createdCityname,
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
