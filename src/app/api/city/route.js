import dbConnection from "@/backend/db/dbconnection";
import cities from "@/backend/models/cities/cities";
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

const GET = async () => {
  try {
    const allCities = await cities.find();
    return NextResponse.json({
      message: "All Cities Found",
      success: true,
      data: allCities,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export { POST, GET };
