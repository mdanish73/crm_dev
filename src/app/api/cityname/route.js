import dbConnection from "@/backend/db/dbconnection";
import cityNames from "@/backend/models/cities/cityNames";
import { NextResponse } from "next/server";
// Database Function Call For Connection
dbConnection();

// Create The CityName
export const POST = async (req) => {
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

// Get All The CityName
export const GET = async () => {
  try {
    const allcitynames = await cityNames.find();
    return NextResponse.json({
      message: "Citynames Found ",
      success: true,
      data: allcitynames,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

